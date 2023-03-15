import { useEffect } from "react";
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
import PaginationMovies from "../components/paginationMovies";

export default function Home() {
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

  return (
    <>
      <Header />

      {movies.error ? (
        <Typography
          variant="h4"
          textAlign="center"
          color="#ebeef5"
          sx={{ pb: 40 }}
        >
          Movies connection error 👀
        </Typography>
      ) : (
        <>
          <SearchMovie
            handleChangeField={handleChangeField}
            fieldMovie={fieldMovie}
          />
          <Movies moviesData={filterPage} />
        </>
      )}

      {movies.error || movies.data?.results ? (
        <PaginationMovies
          total_pages={filterPage?.total_pages}
          page={debounceTerm ? pageFilme : pageHome}
          onChange={debounceTerm ? handleChangePageFilme : handleChangePageHome}
        />
      ) : null}
    </>
  );
}
