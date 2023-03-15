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

  return (
    <>
      <Header />

      {playingMovie.error ? (
        <Typography
          variant="h4"
          textAlign="center"
          color="#ebeef5"
          sx={{ pb: 40 }}
        >
          Now Playing connection error 👀
        </Typography>
      ) : (
        <Movies moviesData={playingMovie.data} />
      )}

      {playingMovie.error || playingMovie.data?.results ? (
        <PaginationMovies
          total_pages={playingMovie?.data?.total_pages}
          page={page}
          onChange={handleChangePagePlayingMovie}
        />
      ) : null}
    </>
  );
}
