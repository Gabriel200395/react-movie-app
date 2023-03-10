import { useEffect, useState } from "react";
import service from "../services/service";
import { useQuery } from "react-query";
import useDebounce from "./useDebounce";
import { Response } from "../types/response";
import useSearchMovie from "./useSearchMovie";
import { useLocalStorage } from "./useLocalStorage";

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
  const [moviesData, setMoviesData] = useState<Response>();
  const [pageHome, setPageHome] = useLocalStorage("pageHome", 1);
  const [fieldMovie, setFieldMovie] = useLocalStorage("fieldMovie", "");

  const debounceTerm = useDebounce(fieldMovie, 800);

  const {
    searchMovies,
    handleChangePageFilme,
    setPageFilme,
    pageFilme,
    errorSearch,
  } = useSearchMovie(debounceTerm, fieldMovie);

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
    if (!fieldMovie.length) {
      setPageFilme(1);
    }
  }, [fieldMovie]);

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
    errorSearch,
    errorMovies: movies.error
  };
}
