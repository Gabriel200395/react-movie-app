import Movies from "../components/cardMovies";
import Header from "../components/header";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

export default function Upcoming() {
  const { upcomingMovie, handleChangePageUpcomingMovie, page } =
    useUpcomingMovie();
  return (
    <div>
      <Header />
      <Movies
        moviesData={upcomingMovie}
        page={page}
        onChange={handleChangePageUpcomingMovie}
      />
    </div>
  );
}
