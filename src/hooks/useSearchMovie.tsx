import { useQuery } from "react-query";
import { Response } from "../types/response";

const fetchSearchMovie = async (
  debounceTerm: string,
  fieldMovie: string,
  pageFilme: number
): Promise<Response | null> => {
  if (debounceTerm) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_ACCESS_KEY}&language=en-US&page=${pageFilme}&query=${fieldMovie}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  }

  return null;
};

export const useSearchMovie = (
  debounceTerm: string,
  fieldMovie: string,
  pageFilme: number
) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["searchMovie", debounceTerm, pageFilme],
    queryFn: () => fetchSearchMovie(debounceTerm, fieldMovie, pageFilme),
  });

  return {
    data,
    error,
    isLoading,
  };
};
