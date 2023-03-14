import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { topRatedMovie } from "../mocks";
import * as useTopRatedMovie from "../hooks/useTopRatedMovie";
import Movie from "../page/topRated";

jest.useFakeTimers();
const mockTopRatedMovie = jest.spyOn(useTopRatedMovie, "useTopRatedMovie");

const queryClient = new QueryClient();

const mockDataTopRatedMovie = () =>
  mockTopRatedMovie.mockReturnValue({
    data: {
      results: topRatedMovie,
      total_pages: 545,
    },
    error: false,
    isLoading: true,
  });

const Component = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Movie />
      </BrowserRouter>
    </QueryClientProvider>
  );

const loadingTopRatedMovie = () =>
  mockTopRatedMovie.mockReturnValue({
    data: undefined,
    error: true,
    isLoading: false,
  });

describe("<Movie />", () => {
  test("error fetch movies top rated", () => {
    loadingTopRatedMovie();
    Component();
    expect(
      screen.getByRole("heading", {
        name: /Top rated movie connection error 👀/i,
      })
    ).toBeInTheDocument();
  });

  test("loading fetch movies top rated", () => {
    mockDataTopRatedMovie();
    Component();
    expect(screen.getByRole("skaleton")).toBeInTheDocument();
  });

  test("fetch movies top rated", () => {
    mockDataTopRatedMovie();
    Component();
    act(() => jest.runAllTimers());

    expect(screen.getByText(topRatedMovie[0].title)).toBeInTheDocument();
  });

  test("top rated movie navigation id", () => {
    const history = createMemoryHistory({ initialEntries: ["/now-playing"] });
    mockDataTopRatedMovie();
    render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          <Movie />
        </Router>
      </QueryClientProvider>
    );

    act(() => jest.runAllTimers());

    expect(history.location.pathname).toBe("/now-playing");
    fireEvent.click(
      screen.getByRole("img", {
        name: /img\-card\-movie/i,
      })
    );
    expect(history.location.pathname).toBe(`/movie/${topRatedMovie[0].id}`);
  });

  test("top rated movie pagination prev e next", () => {
    mockDataTopRatedMovie();
    Component();
    act(() => jest.runAllTimers());

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to next page/i,
      })
    );

    expect(mockTopRatedMovie).toHaveBeenCalledWith(2);

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to previous page/i,
      })
    );

    expect(mockTopRatedMovie).toHaveBeenCalledWith(1);
  });
});
