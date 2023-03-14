import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { movie, searchMovie } from "../mocks";
import Movies from "../page/movies";
import * as useMovies from "../hooks/useMovies";
import * as useSearchMovie from "../hooks/useSearchMovie";

jest.useFakeTimers();

const mockMovies = jest.spyOn(useMovies, "useMovies");
const mockSearchMovie = jest.spyOn(useSearchMovie, "useSearchMovie");

const queryClient = new QueryClient();

const Component = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Movies />
      </BrowserRouter>
    </QueryClientProvider>
  );

const mockDataMovie = () =>
  mockMovies.mockReturnValue({
    data: {
      results: movie,
      total_pages: 37438,
    },
    error: false,
    isLoading: true,
  });

const loadingMovie = () =>
  mockMovies.mockReturnValue({
    data: undefined,
    error: true,
    isLoading: false,
  });

const mockSearchData = () =>
  mockSearchMovie.mockReturnValue({
    data: {
      results: searchMovie,
      total_pages: 4,
    },
    error: false,
    isLoading: true,
  });

beforeEach(() => jest.clearAllMocks());

describe("<Movies />", () => {
  test("error fetch movies", () => {
    loadingMovie();
    Component();
    expect(
      screen.getByRole("heading", { name: /Movies connection error 👀/i })
    ).toBeInTheDocument();
  });

  test("loading fetch movies", () => {
    mockDataMovie();
    Component();
    expect(screen.getByRole("skaleton")).toBeInTheDocument();
  });

  test("fetch movies", () => {
    mockDataMovie();
    Component();
    act(() => jest.runAllTimers());
    expect(screen.getByText(movie[0].title)).toBeInTheDocument();
  });

  test("movie navigation id", () => {
    mockDataMovie();
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          <Movies />
        </Router>
      </QueryClientProvider>
    );

    act(() => jest.runAllTimers());

    expect(history.location.pathname).toBe("/");

    fireEvent.click(
      screen.getByRole("img", {
        name: /img\-card\-movie/i,
      })
    );

    expect(history.location.pathname).toBe(`/movie/${movie[0].id}`);
  });

  test("pagination movie next e prev", () => {
    mockDataMovie();
    Component();

    act(() => jest.runAllTimers());

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to next page/i,
      })
    );

    expect(mockMovies).toHaveBeenCalledWith(2);

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to previous page/i,
      })
    );

    expect(mockMovies).toHaveBeenCalledWith(1);
  });

  test("search movie", () => {
    mockSearchData();
    mockDataMovie();
    Component();

    act(() => jest.runAllTimers());

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "Avatar",
      },
    });

    act(() => jest.runAllTimers());

    expect(screen.getByText(searchMovie[0].title)).toBeInTheDocument();
    expect(mockSearchMovie).toHaveBeenCalledWith("Avatar", "Avatar", 1);
  });

  test("pagination search movie next e prev", () => {
    mockSearchData();
    mockDataMovie();
    Component();

    act(() => jest.runAllTimers());

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "Avatar",
      },
    });

    act(() => jest.runAllTimers());

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to next page/i,
      })
    );
    expect(mockSearchMovie).toHaveBeenCalledWith("Avatar", "Avatar", 2);

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to previous page/i,
      })
    );
    expect(mockSearchMovie).toHaveBeenCalledWith("Avatar", "Avatar", 1);
  });
});
