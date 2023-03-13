import { useQuery } from "react-query";
import { MovieId } from "../types/movieId";

const fetchMovieID = async (id: string | undefined): Promise<MovieId> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const response = data.json();
  return response;
};

export function useMoveId(id: string | undefined) {
  const getMovieId = useQuery({
    queryKey: [["movieId", id]],
    queryFn: () => fetchMovieID(id),
  });

  return getMovieId;
}
