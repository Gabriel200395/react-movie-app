import { Movie } from "./movie";

export interface Response {
  total_pages: number;
  results: Movie[];
}
