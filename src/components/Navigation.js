import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const Item = styled(Link)`
  color: black;
`;

class Navigation extends Component {
  render() {
    return (
      <Menu secondary size="massive">
        <Menu.Item style={{ textAlign: "center" }}>
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
      </Menu>
    );
  }
}

export default Navigation;
