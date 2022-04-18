defmodule FlyingPenguinWeb.PageController do
  use FlyingPenguinWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
