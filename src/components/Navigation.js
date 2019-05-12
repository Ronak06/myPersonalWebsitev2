import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const itemStyle = {
  fontFamily: "Berkshire Swash",
  fontSize: "25px"
};

const MenuHeader = styled.div`
  font-size: 10px;
  padding: 0px;
`;

class Navigation extends Component {
  render() {
    return (
      <MenuHeader
        className="ui menu secondary"
        size="massive"
        style={itemStyle}
      >
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/AboutMe" className="item">
          About Me
        </Link>

        <Link to="/Skills" className="item">
          Skills
        </Link>

        <Link to="/Projects" className="item">
          Projects
        </Link>

        <Link to="/Resume" className="item">
          Resume
        </Link>
      </MenuHeader>
    );
  }
}

export default Navigation;
