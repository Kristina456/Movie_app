import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movies from "./home/Movies";
import Roulette from "./roulette/Roulette";
import MoreInfo from "./more-info/MoreInfo";
import "../style.scss";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/roulette">
          <Roulette />
        </Route>
        <Route path="/moreInfo/:movieId">
          <MoreInfo />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
