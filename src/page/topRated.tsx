import Movies from "../components/cardMovies";
import Header from "../components/header";
import useTopRatedMovie from "../hooks/useTopRatedMovie";

export default function NowPlaying() {
  const { topRatedMovie, page, handleChangePageTopRatedMovie } =
    useTopRatedMovie();

  return (
    <div>
      <Header />
      <Movies
        moviesData={topRatedMovie}
        page={page}
        onChange={handleChangePageTopRatedMovie}
      />
    </div>
  );
}
