import React from "react";
import Emoji from "../../themes/Emoji";
import { Picture, Content, ContentHeader } from "../../themes/styles";

const AboutMe = () => {
  return (
    <div
      className="ui equal width center aligned padded grid"
      style={{ top: "20%" }}
    >
      <div className="ui stackable two column grid">
        <div className="column">
          <Picture src={"/images/Me3.jpg"} alt="Ronak Patel" />
        </div>
        <div className="column">
          <ContentHeader>Who am I?</ContentHeader>
          <Content>
            Hi! My name is Ronak Patel. I have a BSc. in Computer Science at Ryerson University. I truly enjoy coding{" "}
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
