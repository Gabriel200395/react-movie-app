import { useQuery } from "react-query";
import { useEffect } from "react";

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
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const response = data.json();
  return response;
};

const fetchCredentialsMovie = async (
  id: string | undefined
): Promise<CredentialsMovie> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const response = data.json();

  return response;
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

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let errorGetMovieId = getMovieId.error;
  let errorGetCredentialsMovie = getCredentialsMovie.error;

  return {
    getMovieId,
    getCredentialsMovie,
    errorGetMovieId,
    errorGetCredentialsMovie,
  };
}
