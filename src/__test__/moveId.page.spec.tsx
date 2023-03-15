import { screen, fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import * as useMovieId from "../hooks/useMovieId";
import * as useCredentialsMovie from "../hooks/useCredentialsMovie";
import { movieCast, movieId } from "../mocks";
import Movie from "../page/moveId";

window.scroll = jest.fn();
jest.spyOn(Storage.prototype, "setItem");
Storage.prototype.setItem = jest.fn();

const mockDataMovieId = jest.spyOn(useMovieId, "useMovieId");
const mockDataCredentialsMovie = jest.spyOn(
  useCredentialsMovie,
  "useCredentialsMovie"
);
const queryClient = new QueryClient();

const Component = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Movie />
      </BrowserRouter>
    </QueryClientProvider>
  );

const mockDataMovieIdValue = () =>
  mockDataMovieId.mockReturnValue({
    data: movieId,
    error: false,
    isLoading: false,
  });

const mockCredentialsMovieValue = () =>
  mockDataCredentialsMovie.mockReturnValue({
    data: {
      cast: movieCast,
    },
    error: false,
    isLoading: false,
  });

const loadingCredentialsMovie = () =>
  mockDataCredentialsMovie.mockReturnValue({
    data: undefined,
    error: true,
    isLoading: false,
  });

const loadingMovieId = () =>
  mockDataMovieId.mockReturnValue({
    data: undefined,
    error: true,
    isLoading: false,
  });

describe("<Movie />", () => {
  test("errors fetch movies", () => {
    loadingCredentialsMovie();
    loadingMovieId();
    Component();

    expect(
      screen.getByRole("heading", {
        name: /movie id connection error 👀/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /error search actors movies 👀/i,
      })
    );
  });

  test("fetch movies Id", () => {
    mockDataMovieIdValue();
    mockCredentialsMovieValue();
    Component();

    expect(
      screen.getByRole("heading", { name: movieId.original_title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: movieCast[0].name })
    ).toBeInTheDocument();
  });

  test("add wacthList Movie", () => {
    mockDataMovieIdValue();
    mockCredentialsMovieValue();
    Component();

    fireEvent.click(
      screen.getByRole("button", {
        name: /watchlist/i,
      })
    );
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "Watchlist",
      JSON.stringify([movieId])
    );

    fireEvent.doubleClick(
      screen.getByRole("button", {
        name: /watchlist/i,
      })
    );
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalledWith(
      "Watchlist",
      JSON.stringify([movieId, movieId])
    );
  });

  test("not duplicate movie watchList", () => {
    mockDataMovieIdValue();
    mockCredentialsMovieValue();
    Component();

    fireEvent.doubleClick(
      screen.getByRole("button", {
        name: /watchlist/i,
      })
    );
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalledWith(
      "Watchlist",
      JSON.stringify([movieId, movieId])
    );
  });
});
