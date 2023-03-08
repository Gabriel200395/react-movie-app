import { useQuery } from "react-query";
import service from "../services/service";
import { useEffect, useState } from "react";
import { Response } from "../types/response";

const fetchTopRatedMovie = async (page: number): Promise<Response> => {
  const response = await service.get("movie/top_rated", {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
      page: page,
    },
  });

  return response.data;
};
export default function useTopRatedMovie() {
  const [page, setPage] = useState(1);
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
  };
}
