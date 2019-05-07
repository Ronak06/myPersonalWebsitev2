import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const Item = styled(Link)`
  color: black;
`;

const itemStyle = {
  fontFamily: "Berkshire Swash",
  fontSize: "25px"
};

class Navigation extends Component {
  render() {
    return (
      <Menu secondary size="massive" style={itemStyle}>
        <Menu.Item>
          <Item to="/">Home</Item>
        </Menu.Item>
        <Menu.Item>
          <Item to="/AboutMe">About Me</Item>
        </Menu.Item>
        <Menu.Item>
          <Item to="/Skills">Skills</Item>
        </Menu.Item>
        <Menu.Item>
          <Item to="/Projects">Projects</Item>
        </Menu.Item>
        <Menu.Item>
          <Item to="/Resume">Resume</Item>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
