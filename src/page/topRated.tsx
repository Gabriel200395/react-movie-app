import { useTopRatedMovie, useLocalStorage } from "../hooks";
import { Typography } from "@mui/material";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import PaginationMovies from "../components/paginationMovies";

export default function NowPlaying() {
  const [page, setPage] = useLocalStorage("pageTopRatedMovie", 1);
  const topRatedMovie = useTopRatedMovie(page);

  const handleChangePageTopRatedMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <>
      <Header />

      {topRatedMovie.error ? (
        <Typography
          variant="h4"
          textAlign="center"
          color="#ebeef5"
          sx={{ pb: 40 }}
        >
          Top rated movie connection error 👀
        </Typography>
      ) : (
        <Movies moviesData={topRatedMovie.data} />
      )}

      {topRatedMovie.error || topRatedMovie.data?.results ? (
        <PaginationMovies
          total_pages={topRatedMovie.data?.total_pages}
          page={page}
          onChange={handleChangePageTopRatedMovie}
        />
      ) : null}
    </>
  );
}
