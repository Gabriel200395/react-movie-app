import { Typography } from "@mui/material";
import { useMoviesPage } from "../hooks";
import Movies from "../components/cardMovies";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";
import PaginationMovies from "../components/paginationMovies";

export default function Home() {
  const {
    movies,
    filterPage,
    pageFilme,
    fieldMovie,
    debounceTerm,
    pageHome,
    handleChangeField,
    handleChangePageFilme,
    handleChangePageHome,
  } = useMoviesPage();

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

      {movies.error || filterPage?.results.length ? (
        <PaginationMovies
          total_pages={filterPage?.total_pages}
          page={debounceTerm ? pageFilme : pageHome}
          onChange={debounceTerm ? handleChangePageFilme : handleChangePageHome}
        />
      ) : null}
    </>
  );
}
