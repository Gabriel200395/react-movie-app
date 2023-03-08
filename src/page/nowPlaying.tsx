import Movies from "../components/cardMovies";
import Header from "../components/header";
import usePlayingMovie from "../hooks/usePlaying";

export default function NowPlaying() {
  const { playingMovie, page, handleChangePagePlayingMovie } =
    usePlayingMovie();

  return (
    <div>
      <Header />
      <Movies
        moviesData={playingMovie}
        page={page}
        onChange={handleChangePagePlayingMovie}
      />
    </div>
  );
}
