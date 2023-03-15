import { useQuery } from "react-query";

type CredentialsMovie = {
  cast: { name: string; profile_path: string; id: number }[];
};

const fetchCredentialsMovie = async (
  id: string | undefined
): Promise<CredentialsMovie> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export function useCredentialsMovie(id: string | undefined) {
  const { data, error, isLoading } = useQuery({
    queryKey: [["CredentialsMovie", id]],
    queryFn: () => fetchCredentialsMovie(id),
  });

  return {
    data,
    error,
    isLoading,
  };
}
