import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuHeader } from "../themes/styles";

class Navigation extends Component {
  render() {
    return (
      <MenuHeader
        className="ui menu secondary"
        style={{ fontSize: "20px", fontFamily: "Playfair Display" }}
      >
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/AboutMe" className="item">
          About Me
        </Link>

        <Link to="/Projects" className="item">
          Projects
        </Link>
      </MenuHeader>
    );
  }
}

export default Navigation;
