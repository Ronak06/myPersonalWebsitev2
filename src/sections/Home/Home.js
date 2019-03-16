import React from "react";

import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Resume />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
