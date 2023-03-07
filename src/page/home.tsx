import usePageHome from "../hooks/usePageHome";
import Movies from "../components/movies";
import Banner from "../components/banner";
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
        pageFilme={pageFilme}
        pageHome={pageHome}
        handleChangePageFilme={handleChangePageFilme}
        handleChangePageHome={handleChangePageHome}
        debounceTerm={debounceTerm}
      />
    </div>
  );
}
