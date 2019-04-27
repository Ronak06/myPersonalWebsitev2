import React from "react";
import { Content } from "../themes/Content";
import Emoji from "../themes/Emoji";

const AboutMe = () => {
  return (
    <div
      className="aboutMe"
      style={{ minHeight: 790, padding: "1em 0em", textAlign: "center" }}
    >
      <h1>Hi, I'm Ronak Patel!</h1>
      <Content>
        I am a 4th year Computer Science Student. I love to learn and experience
        new things. Coding <Emoji symbol="💻" label="laptop" /> is something I
        truly enjoy doing and it makes me who I am. Outside of programming, I
        love watching (and playing) Basketball{" "}
        <Emoji symbol="🏀" label="basketball" />, gaming{" "}
        <Emoji symbol="🎮" label="gaming" />, and travelling{" "}
        <Emoji symbol="🛫" label="airplane" />.
      </Content>
    </div>
  );
};

export default AboutMe;
