import { useQuery } from "react-query";
import { Response } from "../types/response";
import { useLocalStorage } from "../hooks/useLocalStorage";

const fetchSearchMovie = async (
  debounceTerm: string,
  fieldMovie: string,
  pageFilme: number
): Promise<Response | null> => {
  if (debounceTerm) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${pageFilme}&query=${fieldMovie}`
    );

    const response = await data.json();

    return response;
  }

  return null;
};

export default function useSearchMovie(
  debounceTerm: string,
  fieldMovie: string
) {
  const [pageFilme, setPageFilme] = useLocalStorage("pageFilme", 1);

  const searchMovies = useQuery({
    queryKey: ["searchMovie", debounceTerm, pageFilme],
    queryFn: () => fetchSearchMovie(debounceTerm, fieldMovie, pageFilme),
  });

  const handleChangePageFilme = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageFilme(value);
  };

  return {
    searchMovies,
    errorSearch: searchMovies.error,
    handleChangePageFilme,
    setPageFilme,
    pageFilme,
  };
}
