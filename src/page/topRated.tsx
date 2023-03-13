import { useTopRatedMovie, useLocalStorage } from "../hooks";
import { Typography } from "@mui/material";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import PaginationMovies from "../components/paginationMovies";

export default function NowPlaying() {
  const [page, setPage] = useLocalStorage("pageTopRatedMovie", 1);
  const { data, error } = useTopRatedMovie(page);

  const handleChangePageTopRatedMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (error) {
    <Typography variant="h4" textAlign="center" color="#ebeef5">
      Server connection error 👀
    </Typography>;
  }

  return (
    <>
      <Header />
      <Movies moviesData={data} />
      <PaginationMovies
        total_pages={data?.total_pages}
        page={page}
        onChange={handleChangePageTopRatedMovie}
      />
    </>
  );
}
