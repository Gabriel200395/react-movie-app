import { useQuery } from "react-query";
import { MovieId } from "../types/movieId";

const fetchMovieID = async (id: string | undefined): Promise<MovieId> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function useMovieId(id: string | undefined) {
  const { data, error, isLoading } = useQuery({
    queryKey: [["movieId", id]],
    queryFn: () => fetchMovieID(id),
  });

  return {
    error,
    data,
    isLoading,
  };
}
