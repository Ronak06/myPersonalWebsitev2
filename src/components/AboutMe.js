import React from "react";
import Emoji from "../themes/Emoji";
import { Picture, ContentTwo, Style } from "../themes/styles";

const AboutMe = () => {
  return (
    <Style>
      <Picture src={require("../images/Me.jpg")} alt="Ronak Patel" />
      <ContentTwo>
        I love to learn and experience new things. Coding{" "}
        <Emoji symbol="💻" label="laptop" /> is something I truly enjoy doing
        and it makes me who I am. Outside of programming, I love watching (and
        playing) Basketball <Emoji symbol="🏀" label="basketball" />, gaming{" "}
        <Emoji symbol="🎮" label="gaming" />, and travelling{" "}
        <Emoji symbol="🛫" label="airplane" />.
      </ContentTwo>
    </Style>
  );
};

export default AboutMe;
