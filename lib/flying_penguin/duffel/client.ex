defmodule FlyingPenguin.Duffel.Client do
  alias HTTPoison.Response
  alias HTTPoison.Error
  alias FlyingPenguin.Duffel.Request
  alias FlyingPenguin.Duffel.Response, as: DuffelResponse
  alias FlyingPenguin.Duffel.Offer, as: DuffelOffer

  def get_offers(search_params) do
    request_headers = [
      "Accept-Encoding": "gzip",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Duffel-Version": "beta",
      "Authorization": "Bearer #{System.get_env("DUFFEL_TOKEN")}"
    ]

    url = "https://api.duffel.com/air/offer_requests?return_offers=false"
    case HTTPoison.post(url, build_request_body(search_params), request_headers, [recv_timeout: 20000]) do
      {:ok, %Response{status_code: 201, body: raw }} ->
        raw
        |> :zlib.gunzip
        |> Poison.decode(keys: :atoms)
        |> unwrap_response()
        |> Map.get(:id)
        |> list_offers()
      {:error, %Error{reason: reason}} ->
        IO.inspect "there was an error"
        IO.inspect(reason, label: "error in offer_request")
    end
  end

  def parse_response(response) do
    [first_offer | _] = response

    %DuffelResponse{}
    |> Map.put(:cabin_class, first_offer[:cabin_class])
    |> Map.put(:duffel_offers, parse_offers(response))
  end

  defp parse_offers(offers) do
    Enum.map(offers, fn offer ->
      %DuffelOffer{}
      |> Map.put(:base_amount, offer[:base_amount])
      |> Map.put(:carrier, offer[:owner][:name])
      |> Map.put(:departing_at, get_first_departure_time(offer))
      |> Map.put(:arriving_at, get_final_arrival_time(offer))
      |> Map.put(:number_of_stops, get_stops(offer))
    end)
  end

  def list_offers(request_id) do
    number_of_offers = 5
    list_url = "https://api.duffel.com/air/offers?offer_request_id=#{request_id}&sort=total_amount&limit=#{number_of_offers}"
    request_headers = [
      "Accept-Encoding": "gzip",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Duffel-Version": "beta",
      "Authorization": "Bearer #{System.get_env("DUFFEL_TOKEN")}"
    ]
    case HTTPoison.get(list_url, request_headers, [recv_timeout: 20000]) do
      {:ok, %Response{body: raw}} ->
        raw
        |> :zlib.gunzip
        |> Poison.decode(keys: :atoms)
        |> unwrap_response()
      {:error, %Error{reason: reason}} ->
        IO.inspect(reason, label: "error in list request")
    end
  end

  defp get_stops(offer) do
    [ slice | _] = offer.slices
    length(slice.segments) - 1
  end

  defp get_first_departure_time(offer) do
    [ slice | _] = offer.slices
    [segment | _] = slice.segments
    segment[:departing_at]
  end

  defp get_final_arrival_time(offer) do
    [ slice | _] = offer.slices
    [_ | segment] = slice.segments
    segment[:arriving_at]
  end

  defp build_request_body(search_params) do
    slices = [
      %{
        origin: search_params["origin"],
        destination: search_params["destination"],
        departure_date: map_to_iso8601(search_params["date_of_departure"])
      }
    ]
    passengers = Enum.map(List.duplicate(:elem, String.to_integer(search_params["number_of_adults"])), fn _x -> %{ type: "adult" } end)
    %Request{}
    |> Map.put(:slices, slices)
    |> Map.put(:cabin_class, search_params["seat_class"])
    |> Map.put(:passengers, passengers)
    |> wrap_request()
  end

  defp wrap_request(request) do
    Poison.encode!(%{data: request})
  end

  def unwrap_response({:ok, %{data: response}}) do
    response
  end

  defp map_to_iso8601(map) do
    with year <- String.to_integer(map["year"]),
         month <- String.to_integer(map["month"]),
         day <- String.to_integer(map["day"])
    do
      {:ok, date } = Date.from_erl({ year, month, day })
      Date.to_iso8601(date)
    end
  end
end
