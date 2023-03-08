import service from "../services/service";
import { useQuery } from "react-query";

type CredentialsMovie = {
  cast: { name: string; profile_path: string; id: number }[];
};

type MovieId = {
  backdrop_path: string;
  original_title: string;
  release_date: string;
  overview: string;
  genres: { id: number; name: string }[];
  poster_path: string;
  runtime: number;
  vote_average: number;
};
const fetchMovieID = async (id: string | undefined): Promise<MovieId> => {
  const response = await service.get(`movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
    },
  });

  return response.data;
};

const fetchCredentialsMovie = async (
  id: string | undefined
): Promise<CredentialsMovie> => {
  const response = await service.get(`movie/${id}/credits`, {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
    },
  });

  return response.data;
};

export default function useMoveId(id: string | undefined) {
  const getMovieId = useQuery({
    queryKey: [["movieId", id]],
    queryFn: () => fetchMovieID(id),
  });

  const getCredentialsMovie = useQuery({
    queryKey: [["CredentialsMovie", id]],
    queryFn: () => fetchCredentialsMovie(id),
  });

  return {
    getMovieId,
    getCredentialsMovie,
  };
}
