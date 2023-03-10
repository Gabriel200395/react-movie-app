import Movies from "../components/cardMovies";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";
import useMovies from "../hooks/useMovies";
import { Typography } from "@mui/material";

export default function Home() {
  const {
    handleChangePageFilme,
    handleChangePageHome,
    handleChangeField,
    moviesData,
    pageFilme,
    pageHome,
    debounceTerm,
    fieldMovie,
    errorSearch,
    errorMovies,
  } = useMovies();

  if (errorSearch || errorMovies) {
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Server connection error 👀
      </Typography>
    );
  }

  return (
    <div>
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
    </div>
  );
}
