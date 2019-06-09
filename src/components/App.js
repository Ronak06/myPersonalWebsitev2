//dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//file imports
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/AboutMe" exact component={AboutMe} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
