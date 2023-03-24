import { useParams } from "react-router-dom";
import { useMovieId, useCredentialsMovie } from "../hooks";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import CardMovesId from "../components/cardMoviesId";
import MovieDetails from "../components/movieDetails";
import BannerIDMovie from "../components/bannerID";
import Header from "../components/header";

export default function MoveId() {
  const { id } = useParams<{ id?: string }>();

  const getMovieId = useMovieId(id);
  const getCredentialsMovie = useCredentialsMovie(id);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />
      {getMovieId.error ? (
        <Typography variant="h4" textAlign="center" color="#ebeef5">
          Movie id connection error 👀
        </Typography>
      ) : (
        <>
          <BannerIDMovie data={getMovieId.data} />
          <MovieDetails data={getMovieId.data} />
        </>
      )}

      {getCredentialsMovie.error ? (
        <div className="error">
          <Typography variant="h4" textAlign="center" color="#ebeef5">
            Error search actors movies 👀
          </Typography>
        </div>
      ) : (
        <CardMovesId cast={getCredentialsMovie.data?.cast} />
      )}
    </>
  );
}
