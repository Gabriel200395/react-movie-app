import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import useMovies from "../hooks/useMovies";
import useSearchMovie from "../hooks/useSearchMovie";
import Movies from "../page/movies";

const mockMovies = useMovies as jest.Mock<any>;
const mockSearchMovie = useSearchMovie as jest.Mock<any>;

afterEach(() => {
  jest.clearAllMocks();
});

describe("<Movies />", () => {
  mockMovies.mockImplementation(() => ({ isLoading: true }));
  render(<Movies />); 
   
  screen.logTestingPlaygroundURL()
});
