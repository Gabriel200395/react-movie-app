import { useQuery } from "react-query";

type CredentialsMovie = {
  cast: { name: string; profile_path: string; id: number }[];
};

const fetchCredentialsMovie = async (
  id: string | undefined
): Promise<CredentialsMovie> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const response = data.json();

  return response;
};

export function useCredentialsMovie(id: string | undefined) {
  const getCredentialsMovie = useQuery({
    queryKey: [["CredentialsMovie", id]],
    queryFn: () => fetchCredentialsMovie(id),
  });

  return getCredentialsMovie;
}
