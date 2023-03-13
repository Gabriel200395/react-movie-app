import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchPlayingMovie = async (page: number): Promise<Response> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  const response = data.json();

  return response;
};

export function usePlayingMovie(page: number) {
  const getMoviePlaying = useQuery({
    queryKey: [["nowPlayingMovie", page]],
    queryFn: () => fetchPlayingMovie(page),
  }); 

  return getMoviePlaying
}
