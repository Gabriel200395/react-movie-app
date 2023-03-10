import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { Response } from "../types/response";
import { useSearchMovie } from "./useSearchMovie";
import { useLocalStorage } from "./useLocalStorage";
import { useFetch } from "../hooks/useFetchMovie";

export default function useMovies() {
  const [moviesData, setMoviesData] = useState<Response>();
  const [pageHome, setPageHome] = useLocalStorage("pageHome", 1);
  const [fieldMovie, setFieldMovie] = useLocalStorage("fieldMovie", "");
  const [pageFilme, setPageFilme] = useLocalStorage("pageFilme", 1);

  const debounceTerm = useDebounce(fieldMovie, 800);
  const movies = useFetch(pageHome);
  const searchMovie = useSearchMovie(debounceTerm, fieldMovie, pageFilme);

  const handleChangePageFilme = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageFilme(value);
  };

  const handleChangePageHome = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageHome(value);
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFieldMovie(e.target.value);

  useEffect(() => {
    if (debounceTerm && searchMovie.data?.results) {
      setMoviesData(searchMovie.data);
    }

    if (movies.data?.results && !debounceTerm) {
      setMoviesData(movies.data);
    }
  }, [movies, searchMovie]);

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
    errorMovies: movies?.error,
    errorSearch: searchMovie?.error
  };
}
