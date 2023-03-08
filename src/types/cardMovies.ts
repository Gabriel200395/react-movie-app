import { ChangeEvent } from "react";
import { Movie } from "./movie";

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

export interface MoviesProps {
  moviesData: Response | undefined;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
  page: number;
  fieldMovie?: string;
}
