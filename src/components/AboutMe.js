import React from "react";
import { Content } from "../themes/Content";

const AboutMe = () => {
  return (
    <div
      className="aboutMe"
      style={{ minHeight: 790, padding: "1em 0em", textAlign: "center" }}
    >
      <h1>Hi, I'm Ronak Patel!</h1>
      <Content>
        I am a 4th year Computer Science Student. I love to learn and experience
        new things. Coding is something I truly enjoy and makes me who I am.
        Outside of programming, I love watching (and playing) Basketball.
      </Content>
    </div>
  );
};

export default AboutMe;
