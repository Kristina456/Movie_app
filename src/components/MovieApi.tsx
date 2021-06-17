import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movies from "./Movies";
import Roulette from "./Roulette";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/roulette">Movie Roulette</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/home">
            <Movies />
          </Route>
          <Route path="/roulette">
            <Roulette />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
