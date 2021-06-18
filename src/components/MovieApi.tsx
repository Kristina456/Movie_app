import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movies from "./Movies";
import Roulette from "./Roulette";
import MoreInfo from "./MoreInfo";

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
