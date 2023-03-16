import CardWatchlistMovie from "../components/cardWatchlistMovie";
import SearchMovie from "../components/search_movie";
import { Typography } from "@mui/material";
import Header from "../components/header";
import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "../types/movie";

export default function Watchlist() {
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

  return (
    <>
      <Header />
      {storage?.length ? (
        <>
          <SearchMovie
            fieldMovie={fieldMovie}
            handleChangeField={handleChangeField}
          />
          <CardWatchlistMovie watchlistStorage={filterMovie} />
        </>
      ) : (
        <Typography variant="h4" textAlign="center" color="#ebeef5">
          You have not added any movies watchlist 😎
        </Typography>
      )}
    </>
  );
}
