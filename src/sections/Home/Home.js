import React from "react";

import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <div>
      <AboutMe />
      <Resume />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
