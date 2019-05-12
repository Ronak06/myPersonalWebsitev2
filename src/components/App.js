//dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//file imports
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/AboutMe" exact component={AboutMe} />
          <Route path="/Skills" exact component={Skills} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Resume" exact component={Resume} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
