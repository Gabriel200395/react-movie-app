import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Response } from "../types/response";
import { useLocalStorage } from "../hooks/useLocalStorage";

const fetchTopRatedMovie = async (page: number): Promise<Response> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${page}`
  );

  let response = data.json();
  return response;
};

export default function useTopRatedMovie() {
  const [page, setPage] = useLocalStorage("pageTopRatedMovie", 1);
  const [topRatedMovie, setTopRatedMovie] = useState<Response>();

  const getTopRatedMovie = useQuery({
    queryKey: [["topRatedMovie", page]],
    queryFn: () => fetchTopRatedMovie(page),
  });

  useEffect(() => {
    if (getTopRatedMovie.data?.results) {
      setTopRatedMovie(getTopRatedMovie.data);
    }
  }, [getTopRatedMovie]);

  const handleChangePageTopRatedMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return {
    page,
    handleChangePageTopRatedMovie,
    topRatedMovie,
    error: getTopRatedMovie.error,
  };
}
