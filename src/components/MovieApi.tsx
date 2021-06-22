import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movies from "./movies/Movies";
import Roulette from "./roulette/Roulette";
import MoreInfo from "./more-info/MoreInfo";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Movies />
          </Route>
          <Route path="/roulette">
            <Roulette />
          </Route>
          <Route path="/moreInfo/:movieId">
            <MoreInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
