interface Movie {
  release_date: string;
  overview: string;
  genres: { id: number; name: string }[];
  poster_path: string;
  runtime: number;
  vote_average: number;
}

export interface MovieDetailsProps{
  data: Movie | undefined;
}
