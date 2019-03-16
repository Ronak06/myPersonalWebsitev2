import React from "react";

import Header from "../sections/Header/Header";
import Resume from "../sections/Resume/Resume";
import Skills from "../sections/Skills/Skills";
import Contact from "../sections/Contact/Contact";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header />
      <Resume />
      <Skills />
      <Contact />
    </Container>
  );
};

export default App;
