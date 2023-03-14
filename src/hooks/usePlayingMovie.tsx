import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchPlayingMovie = async (page: number): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function usePlayingMovie(page: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: [["nowPlayingMovie", page]],
    queryFn: () => fetchPlayingMovie(page),
  });

  return {
    data,
    error,
    isLoading,
  };
}
