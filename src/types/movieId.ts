export interface MovieId {
  backdrop_path: string;
  original_title: string;
  release_date: string;
  overview: string;
  genres: { id: number; name: string }[];
  poster_path: string;
  runtime: number;
  vote_average: number;
}
