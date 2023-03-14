import { Typography } from "@mui/material";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import PaginationMovies from "../components/paginationMovies";
import { usePlayingMovie, useLocalStorage } from "../hooks";

export default function NowPlaying() {
  const [page, setPage] = useLocalStorage("playingMovie", 1);
  const playingMovie = usePlayingMovie(page);

  const handleChangePagePlayingMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (playingMovie.error) {
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Now Playing connection error 👀
      </Typography>
    );
  }

  return (
    <>
      <Header />
      <Movies moviesData={playingMovie.data} />
      {playingMovie.data?.results?.length && (
        <PaginationMovies
          total_pages={playingMovie.data.total_pages}
          page={page}
          onChange={handleChangePagePlayingMovie}
        />
      )}
    </>
  );
}
