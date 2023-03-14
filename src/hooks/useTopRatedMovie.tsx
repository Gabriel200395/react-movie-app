import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchTopRatedMovie = async (page: number): Promise<Response> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function useTopRatedMovie(page: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: [["topRatedMovie", page]],
    queryFn: () => fetchTopRatedMovie(page),
  });

  return {
    data,
    error,
    isLoading,
  };
}
