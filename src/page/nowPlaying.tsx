import { Typography } from "@mui/material";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import usePlayingMovie from "../hooks/usePlayingMovie";

export default function NowPlaying() {
  const { playingMovie, page, handleChangePagePlayingMovie, error } =
    usePlayingMovie();

  if (error) {
    <Typography variant="h4" textAlign="center" color="#ebeef5">
      Server connection error 👀
    </Typography>;
  }

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
