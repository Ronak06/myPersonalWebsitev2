import React from "react";
import { Header, Name, homeStyle } from "../themes/styles";
import Footer from "./Footer";

const Home = () => {
  return (
    <div style={homeStyle}>
      <Header>
        Hi,
        <br />
        I'm <Name> Ronak Patel</Name>
      </Header>
      <Footer />
    </div>
  );
};

export default Home;
