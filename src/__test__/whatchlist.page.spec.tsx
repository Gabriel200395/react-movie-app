import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { movieId } from "../mocks/movieId";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import Movie from "../page/watchlist";

jest.spyOn(Storage.prototype, "getItem");
Storage.prototype.getItem = Storage.prototype.getItem;
const storage = (Storage.prototype.getItem = jest.fn());
jest.useFakeTimers();

const queryClient = new QueryClient();

const Component = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Movie />
      </BrowserRouter>
    </QueryClientProvider>
  );

describe("<Movie />", () => {
  test("no movies on the list", () => {
    Component();
    expect(
      screen.getByRole("heading", {
        name: /you have not added any movies watchlist 😎/i,
      })
    ).toBeInTheDocument();
  });

  test("movie added to list", () => {
    storage.mockReturnValue(JSON.stringify([movieId]));
    Component();
    act(() => jest.runAllTimers());

    expect(
      screen.getByRole("img", {
        name: /img\-card\-movie/i,
      })
    ).toBeInTheDocument();
  });

  test("movie not found", () => {
    storage.mockReturnValue(JSON.stringify([movieId]));
    Component();
    act(() => jest.runAllTimers());
    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "teste",
      },
    });

    expect(
      screen.queryByRole("img", {
        name: /img\-card\-movie/i,
      })
    ).not.toBeInTheDocument();
  });

  test("remove movie", () => {
    storage.mockReturnValue(JSON.stringify([movieId]));
    Component();
    act(() => jest.runAllTimers());
    fireEvent.click(screen.getByTestId("remove-list-movie"));
    expect(
      screen.queryByRole("img", {
        name: /img\-card\-movie/i,
      })
    ).not.toBeInTheDocument();
  });

  test("navigation movie id", () => {
    const history = createMemoryHistory({ initialEntries: ["/watchlist"] });
    storage.mockReturnValue(JSON.stringify([movieId]));
    render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          <Movie />
        </Router>
      </QueryClientProvider>
    );

    act(() => jest.runAllTimers());
    expect(history.location.pathname).toBe("/watchlist");
    fireEvent.click(screen.getByTestId("watch-movie"));
    expect(history.location.pathname).toBe(`/movie/${movieId.id}`);
  });
});
