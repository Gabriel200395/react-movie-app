import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Home from "../page/movies";
import MoveId from "../page/moveId";
import NowPlaying from "../page/nowPlaying";
import TopRated from "../page/topRated";
import Watchlist from "../page/watchlist";

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/movie/:id" element={<MoveId />} />
      </Router>
    </BrowserRouter>
  );
}
