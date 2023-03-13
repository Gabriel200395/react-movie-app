import { useTopRatedMovie, useLocalStorage } from "../hooks";
import { Typography } from "@mui/material";
import { useEffect } from "react";
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
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Server connection error 👀
      </Typography>
    );
  }

  return (
    <>
      <Header />

      {data?.results?.length ? (
        <Movies moviesData={data} />
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
        total_pages={data?.total_pages}
        page={page}
        onChange={handleChangePageTopRatedMovie}
      />
    </>
  );
}
