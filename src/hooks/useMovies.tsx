import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchMovies = async (pageHome: number): Promise<Response> => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${pageHome}`
  );
  
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json();
};

export const useMovies = (pageHome: number) => {
  const { data, error, isLoading } = useQuery<Response>({
    queryKey: ["movies", pageHome],
    queryFn: () => fetchMovies(pageHome),
  });

  return {
    data,
    isLoading,
    error,
  };
};
