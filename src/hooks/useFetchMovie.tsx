import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchMovies = async (pageHome: number): Promise<Response> => {
  let data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${pageHome}`
  );

  const response = await data.json();

  return response;
};

export const useFetch = (pageHome: number) =>
  useQuery<Response>({
    queryKey: ["movies", pageHome],
    queryFn: () => fetchMovies(pageHome),
  });
