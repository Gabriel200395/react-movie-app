import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "../types/movie";

export function useWatchList() {
  const [watchlistStorage, setWatchlistStorage] = useState<Movie[]>();
  const [filterMovie, setFilterMovie] = useState<Movie[]>();

  let storage = JSON.parse(localStorage.getItem("Watchlist") as string);

  useEffect(() => {
    setWatchlistStorage(storage);
    setFilterMovie(storage);
  }, []);

  return {
    filterMovie,
    watchlistStorage,
    setFilterMovie,
    storage
  };
}
