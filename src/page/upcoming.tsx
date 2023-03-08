import Movies from "../components/cardMovies";
import Header from "../components/header";
import { useQuery } from "react-query";
import service from "../services/service";
import { useEffect, useState } from "react";

interface MoviesProps {
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
  results: MoviesProps[];
};

const fetch = async (page: number): Promise<Response> => {
  const response = await service.get("movie/upcoming", {
    params: {
      api_key: process.env.REACT_APP_ACCESS_KEY,
      page: page,
    },
  });

  return response.data;
};

export default function Upcoming() {
  const [page, setPage] = useState(1);
  const [Playing, setPlaying] = useState<Response>();

  const getMoviePlaying = useQuery({
    queryKey: [["upcoming", page]],
    queryFn: () => fetch(page),
  });

  useEffect(() => {
    if (getMoviePlaying.data?.results) {
      setPlaying(getMoviePlaying.data);
    }
  }, [getMoviePlaying]);

  const handleChangePageFilme = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  console.log(page);

  return (
    <div>
      <Header />
      <Movies
        moviesData={Playing}
        page={page}
        onChange={handleChangePageFilme}
      />
    </div>
  );
}
