import { useEffect, useState } from "react";
import { Response } from "../types/response";
import { Typography } from "@mui/material";
import {
  useDebounce,
  useLocalStorage,
  useSearchMovie,
  useMovies,
} from "../hooks";
import Movies from "../components/cardMovies";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";

export default function Home() {
  const [moviesData, setMoviesData] = useState<Response>();
  const [pageHome, setPageHome] = useLocalStorage("pageHome", 1);
  const [fieldMovie, setFieldMovie] = useLocalStorage("fieldMovie", "");
  const [pageFilme, setPageFilme] = useLocalStorage("pageFilme", 1);

  const debounceTerm = useDebounce(fieldMovie, 800);
  const searchMovie = useSearchMovie(debounceTerm, fieldMovie, pageFilme);
  const movies = useMovies(pageHome);

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
      setMoviesData(movies?.data);
    }
  }, [movies, searchMovie]);

  useEffect(() => {
    if (!fieldMovie.length) {
      setPageFilme(1);
    }
  }, [fieldMovie]);

  if (movies.error || searchMovie.error) {
    <Typography variant="h4" textAlign="center" color="#ebeef5">
      Server connection error 👀
    </Typography>;
  }

  return (
    <>
      <Header />
      <SearchMovie
        handleChangeField={handleChangeField}
        fieldMovie={fieldMovie}
      />
      <Movies
        moviesData={moviesData}
        page={debounceTerm ? pageFilme : pageHome}
        onChange={debounceTerm ? handleChangePageFilme : handleChangePageHome}
      />
    </>
  );
}
