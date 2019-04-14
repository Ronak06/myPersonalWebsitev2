import React from "react";
import styled from "styled-components";

const Images = styled.img`
  width: 14em;
  height: 10em;
`;

const Wrapper = styled.div`
  minheight: 500;
  padding: 1em 0em;
  text-align: center;
`;

const Skills = () => {
  return (
    <Wrapper>
      <h1>Technology Stack</h1>
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
