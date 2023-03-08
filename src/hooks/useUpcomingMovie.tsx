import { useQuery } from "react-query";
import service from "../services/service";
import { useEffect, useState } from "react";
import { Response } from "../types/response";

const fetchUpcomingMovie = async (page: number): Promise<Response> => {
  const response = await service.get("movie/upcoming", {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
      page: page,
    },
  });

  return response.data;
};

export default function useUpcomingMovie() {
  const [page, setPage] = useState(1);
  const [upcomingMovie, setUpcomingMovie] = useState<Response>();

  const getUpcomingMovie = useQuery({
    queryKey: [["upcomingMovie", page]],
    queryFn: () => fetchUpcomingMovie(page),
  });

  useEffect(() => {
    if (getUpcomingMovie.data?.results) {
      setUpcomingMovie(getUpcomingMovie.data);
    }
  }, [getUpcomingMovie]);

  const handleChangePageUpcomingMovie = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return {
    upcomingMovie,
    page,
    handleChangePageUpcomingMovie,
  };
}
