import {Movie} from "./movie"
 

type MovieData = {
  total_pages: number;
  results: Movie[];
};

export interface MoviesProps {
  moviesData: MovieData | undefined;
}
