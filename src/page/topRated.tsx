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

  if (topRatedMovie.error) {
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Top rated movie connection error 👀
      </Typography>
    );
  }

  return (
    <>
      <Header />

      {topRatedMovie.data?.results?.length ? (
        <Movies moviesData={topRatedMovie.data} />
      ) : (
        <Typography
          variant="h4"
          textAlign="center"
          color="#ebeef5"
          sx={{ pb: 40 }}
        >
          Page Not Found 👀
        </Typography>
      )}

      <PaginationMovies
        total_pages={topRatedMovie.data?.total_pages}
        page={page}
        onChange={handleChangePageTopRatedMovie}
      />
    </>
  );
}
