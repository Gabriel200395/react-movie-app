import { Typography } from "@mui/material";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import useTopRatedMovie from "../hooks/useTopRatedMovie";

export default function NowPlaying() {
  const { topRatedMovie, page, handleChangePageTopRatedMovie, error } =
    useTopRatedMovie();

  if (error) {
    <Typography variant="h4" textAlign="center" color="#ebeef5">
      Server connection error 👀
    </Typography>;
  }

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
