import service from "../services/service";
import { useQuery } from "react-query";
import { Response } from "../types/response";  
import {useLocalStorage} from "../hooks/useLocalStorage"


const fetchSearchMovie = async (
  debounceTerm: string,
  fieldMovie: string,
  pageFilme: number
): Promise<Response | null> => {
  if (debounceTerm) {
    let response = await service.get("search/movie", {
      params: {
        api_key: process.env.REACT_APP_ACCESS_KEY,
        query: fieldMovie,
        page: pageFilme,
      },
    });
    return response.data;
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
