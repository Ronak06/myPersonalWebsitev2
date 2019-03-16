//dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//file imports
import Navigation from "./Navigation/Navigation";
import Home from "../sections/Home/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
