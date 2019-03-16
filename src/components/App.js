import React from "react";

import Header from "./Header";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <div className="ui container">
        <Resume />
      </div>
      <div className="ui container">
        <Skills />
      </div>
      <div className="ui container">
        <Contact />
      </div>
    </div>
  );
};

export default App;
