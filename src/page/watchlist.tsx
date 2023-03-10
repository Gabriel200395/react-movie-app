import Header from "../components/header";
import CardWatchlistMovie from "../components/cardWatchlistMovie";
import SearchMovie from "../components/search_movie";
import { Typography } from "@mui/material";
import useWatchList from "../hooks/useWatchlist";

export default function Watchlist() {
  const { fieldMovie, handleChangeField, filterMovie, storage } =
    useWatchList();

  return (
    <div>
      <Header />
      {storage.length ? (
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
    </div>
  );
}
