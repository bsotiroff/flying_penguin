defmodule FlyingPenguin.Flight do
  @moduledoc """
  The Flight context.
  """

  import Ecto.Query, warn: false
  alias FlyingPenguin.Repo

  alias FlyingPenguin.Flight.Search


  @doc """
  Creates a search.

  ## Examples

      iex> create_search(%{field: value})
      {:ok, %Search{}}

      iex> create_search(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_search(attrs \\ %{}) do
    %Search{}
    |> Search.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking search changes.

  ## Examples

      iex> change_search(search)
      %Ecto.Changeset{data: %Search{}}

  """
  def change_search(%Search{} = search, attrs \\ %{}) do
    Search.changeset(search, attrs)
  end
end
