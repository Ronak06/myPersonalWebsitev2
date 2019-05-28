import React from "react";
import { Content, Wrapper, Images } from "../themes/styles";

const Skills = () => {
  return (
    <Wrapper>
      <h1>Technology Stack</h1>
      <Content>
        Over the past several years, I have worked with various programming
        languages and software to build my applications.
      </Content>
      <Images src={require("../images/html5.png")} alt="html5" />
      <Images src={require("../images/css3.png")} alt="css3" />
      <Images src={require("../images/git.png")} alt="git" />
      <Images src={require("../images/react.png")} alt="react" />
      <Images src={require("../images/nodejs.png")} alt="node" />
      <Images src={require("../images/vscode.png")} alt="vscode" />
    </Wrapper>
  );
};

export default Skills;
