import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/header";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";

describe("<Header />", () => {
  test("should render links header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("link", { name: /now playing/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /top rated/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /watchlist/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /logo\.png/i })).toBeInTheDocument();
  });
  test("navigation now playing movie page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByRole("link", { name: /now playing/i }));
    expect(history.location.pathname).toBe("/now-playing");
  });

  test("navigation top rated movie page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByRole("link", { name: /top rated/i }));
    expect(history.location.pathname).toBe("/top-rated");
  });

  test("navigation watchlist movie page", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByRole("link", { name: /watchlist/i }));
    expect(history.location.pathname).toBe("/watchlist");
  }); 

  test("navigation home page movie", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    fireEvent.click(screen.getByRole("img", { name: /logo\.png/i }))
    expect(history.location.pathname).toBe("/");
  });
});
