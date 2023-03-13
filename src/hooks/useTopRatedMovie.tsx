import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchTopRatedMovie = async (page: number): Promise<Response> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  let response = data.json();
  return response;
};

export function useTopRatedMovie(page: number) {
  const getTopRatedMovie = useQuery({
    queryKey: [["topRatedMovie", page]],
    queryFn: () => fetchTopRatedMovie(page),
  });

  return getTopRatedMovie;
}
