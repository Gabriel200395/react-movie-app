import "./global.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Home from "./page/movies";
import MoveId from "./page/moveId";
import NowPlaying from "./page/nowPlaying";
import TopRated from "./page/topRated";
import Watchlist from "./page/watchlist";
import Header from "./components/header";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/now-playing" element={<NowPlaying />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/movie/:id" element={<MoveId />} />
    </Router>
    </BrowserRouter>
  </QueryClientProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
