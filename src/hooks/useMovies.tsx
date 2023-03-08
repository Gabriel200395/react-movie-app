import { useEffect, useState } from "react";
import service from "../services/service";
import { useQuery } from "react-query";
import useDebounce from "./useDebounce";
import { Response } from "../types/response";
import useSearchMovie from "./useSearchMovie";

const fetchMovies = async (pageHome: number): Promise<Response> => {
  let response = await service.get("movie/popular", {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
      page: pageHome,
    },
  });
  return await response.data;
};

export default function useMovies() {
  const [fieldMovie, setFieldMovie] = useState("");
  const [moviesData, setMoviesData] = useState<Response>();
  const [pageHome, setPageHome] = useState(1);

  const debounceTerm = useDebounce(fieldMovie, 800);

  const { searchMovies, handleChangePageFilme, setPageFilme, pageFilme, errorSearch } =
    useSearchMovie(debounceTerm, fieldMovie);

  const movies = useQuery<Response>({
    queryKey: ["movies", pageHome],
    queryFn: () => fetchMovies(pageHome),
  });

  const handleChangePageHome = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageHome(value);
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFieldMovie(e.target.value);

  useEffect(() => {
    if (debounceTerm && searchMovies.data?.results) {
      setMoviesData(searchMovies.data);
    }

    if (movies.data?.results && !debounceTerm) {
      setMoviesData(movies.data);
    }
  }, [movies, searchMovies]);

  useEffect(() => {
    if (debounceTerm) {
      setPageFilme(1);
    }
  }, [debounceTerm]);

  return {
    handleChangePageFilme,
    setFieldMovie,
    handleChangePageHome,
    handleChangeField,
    moviesData,
    pageFilme,
    pageHome,
    debounceTerm,
    fieldMovie,  
    errorSearch
  };
}
