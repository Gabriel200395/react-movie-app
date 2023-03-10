import { screen, render, fireEvent, waitFor } from "@testing-library/react"; 
import { QueryClient, QueryClientProvider } from "react-query";
import Movie from "../page/movies"
const queryClient = new QueryClient();


/* import useMovies from "../hooks/useMovies";
import useSearchMovie from "../hooks/useSearchMovie";
 */import Movies from "../page/movies";

/* const mockMovies = useMovies as jest.Mock<any>;
const mockSearchMovie = useSearchMovie as jest.Mock<any>;
 */
afterEach(() => {
  jest.clearAllMocks();
});

describe("<Movies />", () => {
   test("" , () => {
    render(<QueryClientProvider client={queryClient}><Movie /></QueryClientProvider> ); 
   
    screen.logTestingPlaygroundURL()
   })
});
