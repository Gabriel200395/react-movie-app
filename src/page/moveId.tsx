import Header from "../components/header";
import { useParams } from "react-router-dom";
import CardMovesId from "../components/cardMoviesId";
import MovieDetails from "../components/movieDetails";
import BannerIDMovie from "../components/bannerID";
import useMoveId from "../hooks/useMoveId";
import { Typography } from "@mui/material";

export default function MoveId() {
  const { id } = useParams<{ id?: string }>();

  const { getMovieId, getCredentialsMovie, errorGetCredentialsMovie, errorGetMovieId } = useMoveId(id);

  if (errorGetCredentialsMovie || errorGetMovieId) {
    return (
      <Typography variant="h4" textAlign="center" color="#ebeef5">
        Server connection error 👀
      </Typography>
    );
  }

  return (
    <div>
      <Header />
      <BannerIDMovie data={getMovieId.data} />
      <MovieDetails data={getMovieId.data} />
      <CardMovesId cast={getCredentialsMovie.data?.cast} />
    </div>
  );
}
