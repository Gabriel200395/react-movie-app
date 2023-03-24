import { useEffect } from "react";
import {
  useDebounce,
  useLocalStorage,
  useMovies,
  useSearchMovie,
} from "../hooks";

export function useMoviesPage() {
  const [pageHome, setPageHome] = useLocalStorage("pageHome", 1);
  const [fieldMovie, setFieldMovie] = useLocalStorage("fieldMovie", "");
  const [pageFilme, setPageFilme] = useLocalStorage("pageFilme", 1);

  const debounceTerm = useDebounce(fieldMovie, 500);
  const searchMovie = useSearchMovie(debounceTerm, fieldMovie, pageFilme);
  const movies = useMovies(pageHome);

  const handleChangePageFilme = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageFilme(value);
    window.scroll(0, 0);
  };

  const handleChangePageHome = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageHome(value);
    window.scroll(0, 0);
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFieldMovie(e.target.value);

  const filterPage =
    debounceTerm && searchMovie.data ? searchMovie.data : movies.data;

  useEffect(() => {
    if (!fieldMovie.length) {
      setPageFilme(1);
    }
  }, [fieldMovie]);

  return {
    handleChangeField,
    handleChangePageHome,
    handleChangePageFilme,
    fieldMovie,
    filterPage,
    movies,
    pageFilme,
    pageHome,
    debounceTerm,
  };
}
