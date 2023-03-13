import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "../page/movies";
import MoveId from "../page/moveId";
import NowPlaying from "../page/nowPlaying";
import TopRated from "../page/topRated";
import Watchlist from "../page/watchlist";

const queryClient = new QueryClient();

export default function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/movie/:id" element={<MoveId />} />
        </Router>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
