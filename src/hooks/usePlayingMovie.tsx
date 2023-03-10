import { useQuery } from "react-query";
import service from "../services/service";
import { useEffect, useState } from "react";
import { Response } from "../types/response";
import {useLocalStorage} from "./useLocalStorage"

const fetchPlayingMovie = async (page: number): Promise<Response> => {
  const response = await service.get("movie/now_playing", {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
      page: page,
    },
  });

  return response.data;
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
    error: getMoviePlaying.error
  };
}
