//dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//file imports
import Navigation from "./Navigation";
import Home from "./Home";
import Footer from "./Footer";
import Skills from "./Skills";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/Skills" exact component={Skills} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
