import { useEffect, useState } from "react";
import service from "../services/service";
import { useQuery } from "react-query";
import useDebounce from "./useDebounce";

interface Movies {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  id: number;
  title: string;
  vote_average: number;
}

type Response = {
  total_pages: number;
  results: Movies[];
};

export default function usePageHome() {
  const [fieldMovie, setFieldMovie] = useState("");
  const [moviesData, setMoviesData] = useState<Response>();
  const [pageHome, setPageHome] = useState(1);
  const [pageFilme, setPageFilme] = useState(1);
  const [loading, setLoading] = useState(false);

  const debounceTerm = useDebounce(fieldMovie, 800);

  const movies = useQuery<Response>(["movies", pageHome], async () => {
    let response = await service.get("movie/popular", {
      params: {
        api_key: process.env.REACT_APP_ACCESS_KEY,
        page: pageHome, 
      },
    });
    return await response.data;
  });

  const searchMovies = useQuery(
    ["searchMovie", debounceTerm, pageFilme],
    async () => {
      if (debounceTerm) {
        let response = await service.get("search/movie", {
          params: {
            api_key: process.env.REACT_APP_ACCESS_KEY,
            query: fieldMovie,
            page: pageFilme,
          },
        });
        return response.data;
      }
    }
  );

  const handleChangePageHome = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageHome(value);
  };

  const handleChangePageFilme = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageFilme(value);
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFieldMovie(e.target.value);

  useEffect(() => {
    if (debounceTerm && searchMovies.data?.results) {
      setMoviesData(searchMovies.data);
    }

    if (movies.data?.results && !debounceTerm) {
      setMoviesData(movies.data);
    }
  }, [movies, searchMovies]);

  useEffect(() => {
    if (debounceTerm) {
      setPageFilme(1);
    }
  }, [debounceTerm]);
   
  return {
    handleChangePageFilme,
    setFieldMovie,
    handleChangePageHome,
    handleChangeField,
    moviesData,
    pageFilme,
    pageHome,
    debounceTerm,
    fieldMovie,
  };
}
