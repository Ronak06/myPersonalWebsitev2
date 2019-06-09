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
          <Picture src={require("../images/Me.jpg")} alt="Ronak Patel" />
        </div>
        <div className="column">
          <Content>
            <h1 style={{ fontSize: "50px" }}>Ronak Patel</h1>I love to learn and
            experience new things. Coding <Emoji symbol="💻" label="laptop" />{" "}
            is something I truly enjoy doing and it makes me who I am. Outside
            of programming, I love watching (and playing) Basketball{" "}
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
