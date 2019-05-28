import React from "react";
import { Header, Name } from "../themes/styles";
import Footer from "./Footer";

const style = {
  minHeight: 790,
  padding: "1em 0em",
  textAlign: "center"
};

const Home = () => {
  return (
    <div style={style}>
      <Header>
        Hi, I'm <Name>Ronak Patel</Name>
      </Header>
      <Footer />
    </div>
  );
};

export default Home;
