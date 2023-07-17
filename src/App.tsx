import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/Home";
import HandleRedirectContainer from "./containers/HandleRedirect";
import React from "react";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeContainer />
        </Route>
        <Route path="/:shortId">
          <HandleRedirectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
