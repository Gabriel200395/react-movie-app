import { Typography } from "@mui/material";
import { useWatchlist } from "../hooks";
import CardWatchlistMovie from "../components/cardWatchlistMovie";
import SearchMovie from "../components/search_movie";
import Header from "../components/header";

export default function Watchlist() {
  const { storage, fieldMovie, handleChangeField, filterMovie } =
    useWatchlist();

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
