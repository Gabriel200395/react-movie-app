import { useParams } from "react-router-dom";
import { useMoveId, useCredentialsMovie } from "../hooks";
import { Typography } from "@mui/material";
import CardMovesId from "../components/cardMoviesId";
import MovieDetails from "../components/movieDetails";
import BannerIDMovie from "../components/bannerID";
import Header from "../components/header";
import { useEffect } from "react";

export default function MoveId() {
  const { id } = useParams<{ id?: string }>();

  const getMovieId = useMoveId(id);
  const getCredentialsMovie = useCredentialsMovie(id);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (getMovieId.error || getCredentialsMovie.error) {
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Server connection error 👀
      </Typography>
    );
  }

  return (
    <>
      <Header />
      <BannerIDMovie data={getMovieId.data} />
      <MovieDetails data={getMovieId.data} />
      <CardMovesId cast={getCredentialsMovie.data?.cast} />
    </>
  );
}
