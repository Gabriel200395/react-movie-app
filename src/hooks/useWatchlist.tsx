import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "../types/movie";

export default function useWatchList(){

    const [watchlistStorage, setWatchlistStorage] = useState<Movie[]>();
    const [filterMovie, setFilterMovie] = useState<Movie[]>();
    const [fieldMovie, setfieldMovie] = useState("");
  
    let storage = JSON.parse(localStorage.getItem("Watchlist") as string);
  
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
        filterMovie, 
        fieldMovie, 
        handleChangeField,
        storage
    }


}