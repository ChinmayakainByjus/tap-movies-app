import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import LatestReleases from "./pages/LatestRelease";
import MovieDetails from "./pages/MovieDetails";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/add-movie">
        <AddMovie />
      </Route>

      <Route exact path="/latest-releases">
        <LatestReleases />
      </Route>

      <Route exact path="/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  );
};

export default Router;
