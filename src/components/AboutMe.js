import React from "react";
import Emoji from "../themes/Emoji";
import { Picture, Content } from "../themes/styles";

const AboutMe = () => {
  return (
    <div
      className="ui equal width center aligned padded grid"
      style={{ paddingTop: 50 }}
    >
      <div className="row">
        <div className="column">
          <Picture src={"/images/Me.jpg"} alt="Ronak Patel" />
        </div>
        <div className="column">
          <h1 style={{ fontSize: "50px", paddingTop: "100px" }}>Who am I?</h1>
          <Content>
            Hi! My name is Ronak Patel. I am a Computer Science student aspiring
            to be a Full-stack Developer. I truly enjoy coding{" "}
            <Emoji symbol="💻" label="laptop" /> and love to build new things.
            Outside of programming, I love watching (and playing) Basketball{" "}
            <Emoji symbol="🏀" label="basketball" />, gaming{" "}
            <Emoji symbol="🎮" label="gaming" />, and travelling{" "}
            <Emoji symbol="🛫" label="airplane" />.
          </Content>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
