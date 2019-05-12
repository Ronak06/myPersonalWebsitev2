import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  float: left;
  padding: 50px;
  padding-top: 100px;
  width: 500px;
`;

const Content = styled.p`
  font-size: 27px;
  padding: 50px;
  padding-top: 150px;
`;

const Style = styled.div`
  minHeight: 790,
  overflowY: hidden
`;

const AboutMe = () => {
  return (
    <Style>
      <Picture src={require("../images/Me.jpg")} alt="Ronak Patel" />
      <Content>
        This is where my bio will go This is where my bio will go This is where
        my bio will go This is where my bio will go This is where my bio will
        goThis is where my bio will go This is where my bio will go This is
        where my bio will go This is where my bio will goThis is where my bio
        will go This is where my bio will go This is where my bio will go
      </Content>
    </Style>
  );
};

export default AboutMe;
