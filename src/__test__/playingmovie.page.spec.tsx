import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { nowPlaingMovie } from "../mocks";
import * as usePlayingMovie from "../hooks/usePlayingMovie";
import Movie from "../page/nowPlaying";

jest.useFakeTimers();
const mockPlayingMovie = jest.spyOn(usePlayingMovie, "usePlayingMovie");

const queryClient = new QueryClient();

const mockDataNowPlayingMovie = () =>
  mockPlayingMovie.mockReturnValue({
    data: {
      results: nowPlaingMovie,
      total_pages: 77,
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

const loadingNowPlayingMovie = () =>
  mockPlayingMovie.mockReturnValue({
    data: undefined,
    error: true,
    isLoading: false,
  });

describe("<Movie />", () => {
  test("error fetch movies now playing", () => {
    loadingNowPlayingMovie();
    Component();
    expect(
      screen.getByRole("heading", {
        name: /now playing connection error 👀/i,
      })
    ).toBeInTheDocument();
  });

  test("loading fetch movies now playing", () => {
    mockDataNowPlayingMovie();
    Component();
    expect(screen.getByRole("skaleton")).toBeInTheDocument();
  });

  test("fetch movies now playing", () => {
    mockDataNowPlayingMovie();
    Component();
    act(() => jest.runAllTimers());

    expect(
      screen.getByText(/puss in boots: the last wish/i)
    ).toBeInTheDocument();
  });

  test("now playing movie navigation", () => {
    const history = createMemoryHistory({ initialEntries: ["/now-playing"] });
    mockDataNowPlayingMovie();
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
    expect(history.location.pathname).toBe(`/movie/${nowPlaingMovie[0].id}`);
  });

  test("now playing movie pagination prev e next", () => {
    mockDataNowPlayingMovie();
    Component();
    act(() => jest.runAllTimers());

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to next page/i,
      })
    );

    expect(mockPlayingMovie).toHaveBeenCalledWith(2);

    fireEvent.click(
      screen.getByRole("button", {
        name: /go to previous page/i,
      })
    );

    expect(mockPlayingMovie).toHaveBeenCalledWith(1);
  });
});
