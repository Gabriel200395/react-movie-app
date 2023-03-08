export interface Movie {
  backdrop_path?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  id?: number;
  title?: string;
  release_date?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
  vote_average?: number;
}
