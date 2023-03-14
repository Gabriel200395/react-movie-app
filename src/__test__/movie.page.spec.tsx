import { screen, fireEvent, render } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { act } from "react-dom/test-utils";
import {createMemoryHistory} from "history"
import Movies from "../page/movies";
import * as useMovies from "../hooks/useMovies";
import * as useSearchMovie from "../hooks/useSearchMovie";

jest.useFakeTimers();

const mockMovies = jest.spyOn(useMovies, "useMovies");
const mockSearchMovie = jest.spyOn(useSearchMovie, "useSearchMovie");

const queryClient = new QueryClient();

const results = [
  {
    adult: false,
    backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    genre_ids: [16, 12, 35, 10751],
    id: 315162,
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    popularity: 3180.495,
    poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
    video: false,
    vote_average: 8.4,
    vote_count: 4496,
  },
];

describe("<Movies />", () => {
  test("error fetch movies", () => {
    mockMovies.mockReturnValue({
      data: undefined,
      error: true,
      isLoading: false,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(
      screen.getByRole("heading", { name: /Movies connection error 👀/i })
    ).toBeInTheDocument();
  });

  test("loading fetch movies", () => {
    mockMovies.mockReturnValue({
      data: {
        results: results,
        total_pages: 37438,
      },
      error: false,
      isLoading: true,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByRole("skaleton")).toBeInTheDocument();
  });

  test("fetch movies", () => {
    mockMovies.mockReturnValue({
      data: {
        results: results,
        total_pages: 37438,
      },
      error: false,
      isLoading: true,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </QueryClientProvider>
    );

    act(() => jest.runAllTimers());

    expect(screen.getByText(results[0].title)).toBeInTheDocument();
  }); 

  test("movie navigation id", () => {
    mockMovies.mockReturnValue({
      data: {
        results: results,
        total_pages: 37438,
      },
      error: false,
      isLoading: true,
    });

    const history = createMemoryHistory({initialEntries:["/"]})
    render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          <Movies />
        </Router >
      </QueryClientProvider>
    );

    act(() => jest.runAllTimers());
    
    expect(history.location.pathname).toBe("/") 
    
    fireEvent.click(screen.getByRole('img', {
      name: /img\-card\-movie/i
    }))
   
    expect(history.location.pathname).toBe(`/movie/${results[0].id}`) 
  });

  test("pagination movie next", () => {
    mockMovies.mockReturnValue({
      data: {
        results: results,
        total_pages: 37438,
      },
      error: false,
      isLoading: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </QueryClientProvider>
    );
     

    act(() => jest.runAllTimers());
     
    fireEvent.click(screen.getByRole('button', {
      name: /go to next page/i
    }))
    
    expect(mockMovies).toHaveBeenCalledWith(2)

  }); 

  test("pagination movie  prev", () => {
    mockMovies.mockReturnValue({
      data: {
        results: results,
        total_pages: 37438,
      },
      error: false,
      isLoading: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </QueryClientProvider>
    );
     

    act(() => jest.runAllTimers());
     
    fireEvent.click(screen.getByRole('button', {
      name: /go to previous page/i
    }))
    
    expect(mockMovies).toHaveBeenCalledWith(1)

  });
});
