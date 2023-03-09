import Header from "../components/header";
import { useParams } from "react-router-dom";
import CardMovesId from "../components/cardMoviesId";
import MovieDetails from "../components/movieDetails";
import BannerIDMovie from "../components/bannerID";
import useMoveId from "../hooks/useMoveId";

export default function MoveId() {
  const { id } = useParams<{ id?: string }>();

  const { getMovieId, getCredentialsMovie } = useMoveId(id); 

  return (
    <div>
      <Header />
      <BannerIDMovie data={getMovieId.data} />
      <MovieDetails data={getMovieId.data} />
      <CardMovesId cast={getCredentialsMovie.data?.cast} />
    </div>
  );
}
