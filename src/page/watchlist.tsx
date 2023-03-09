import { useEffect, useState, ChangeEvent } from "react";
import Header from "../components/header";
import { Movie } from "../types/movie";
import CardWatchlistMovie from "../components/cardWatchlistMovie";
import SearchMovie from "../components/search_movie";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Watchlist() {
  const [watchlistStorage, setWatchlistStorage] = useState<Movie[]>();
  const [filter, setFilter] = useState<Movie[]>();
  const [fieldMovie, setfieldMovie] = useLocalStorage("watchlistField", "");

  let storage = JSON.parse(localStorage.getItem("Watchlist") as string);

  useEffect(() => {
    setWatchlistStorage(storage.slice(0, 20));
    setFilter(storage.slice(0, 20));
  }, []);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setfieldMovie(e.target.value);
    setFilter(
      watchlistStorage?.filter((item: any) =>
        item.title
          ?.toLowerCase()
          .toUpperCase()
          .includes(e.target.value.toLowerCase().toUpperCase())
      )
    );
  };
  return (
    <div>
      <Header />
      <SearchMovie
        fieldMovie={fieldMovie}
        handleChangeField={handleChangeField}
      />
      <CardWatchlistMovie watchlistStorage={filter} />
    </div>
  );
}
