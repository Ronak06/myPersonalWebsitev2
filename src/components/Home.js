import React from "react";
import { Content, Header, Name } from "../themes/Content";
import Emoji from "../themes/Emoji";
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
      <Content>
        I love to learn and experience new things. Coding{" "}
        <Emoji symbol="💻" label="laptop" /> is something I truly enjoy doing
        and it makes me who I am. Outside of programming, I love watching (and
        playing) Basketball <Emoji symbol="🏀" label="basketball" />, gaming{" "}
        <Emoji symbol="🎮" label="gaming" />, and travelling{" "}
        <Emoji symbol="🛫" label="airplane" />.
      </Content>
      <Footer />
    </div>
  );
};

export default Home;
