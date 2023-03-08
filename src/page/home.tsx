import usePageHome from "../hooks/usePageHome";
import Movies from "../components/cardMovies";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";

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
  } = usePageHome();

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
