import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "../types/movie";

export function useWatchlist() {
  const [fieldMovie, setfieldMovie] = useState("");
  const [watchlistStorage, setWatchlistStorage] = useState<Movie[]>();
  const [filterMovie, setFilterMovie] = useState<Movie[]>();

  let storage =
    localStorage.getItem("Watchlist") &&
    JSON.parse(localStorage.getItem("Watchlist") as string);

  useEffect(() => {
    setWatchlistStorage(storage);
    setFilterMovie(storage);
  }, []);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setfieldMovie(e.target.value);
    setFilterMovie(
      watchlistStorage?.filter((item: Movie) =>
        item.title
          ?.toLowerCase()
          .toUpperCase()
          .includes(e.target.value.toLowerCase().toUpperCase())
      )
    );
  };

  return {
    handleChangeField,
    fieldMovie,
    filterMovie,
    storage,
  };
}
