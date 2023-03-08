import Movies from "../components/cardMovies";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";
import useMovies from "../hooks/useMovies";

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
  } = useMovies();

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
