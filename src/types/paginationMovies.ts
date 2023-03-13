import { ChangeEvent } from "react";

export interface PaginationMoviesProps {
    total_pages: number | undefined
    onChange: (event: ChangeEvent<unknown>, value: number) => void;
    page: number; 
  }
  