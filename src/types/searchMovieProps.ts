import { ChangeEvent } from "react";
export interface SearchMovieProps {
  handleChangeField: (e: ChangeEvent<HTMLInputElement>) => void;
  fieldMovie: string;
}
