import { Typography } from "@mui/material";
import { useState } from "react";
import Movies from "../components/cardMovies";
import Header from "../components/header";
import { usePlayingMovie, useLocalStorage } from "../hooks";

export default function NowPlaying() {
  const [page, setPage] = useLocalStorage("playingMovie", 1);
  const { data, error } = usePlayingMovie(page);

  const handleChangePagePlayingMovie = (
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
      <Movies
        moviesData={data}
        page={page}
        onChange={handleChangePagePlayingMovie}
      />
    </>
  );
}
