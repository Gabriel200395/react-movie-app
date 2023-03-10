import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Response } from "../types/response";
import { useLocalStorage } from "./useLocalStorage";

const fetchPlayingMovie = async (page: number): Promise<Response> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  const response = data.json();

  return response;
};

export default function usePlayingMovie() {
  const [page, setPage] = useLocalStorage("playingMovie", 1);
  const [playingMovie, setPlayingMovie] = useState<Response>();

  const getMoviePlaying = useQuery({
    queryKey: [["nowPlayingMovie", page]],
    queryFn: () => fetchPlayingMovie(page),
  });

  useEffect(() => {
    if (getMoviePlaying.data?.results) {
      setPlayingMovie(getMoviePlaying.data);
    }
  }, [getMoviePlaying]);

  const handleChangePagePlayingMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return {
    playingMovie,
    handleChangePagePlayingMovie,
    page,
    error: getMoviePlaying.error,
  };
}
