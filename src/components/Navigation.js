import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuHeader } from "../themes/styles";

class Navigation extends Component {
  render() {
    return (
      <MenuHeader className="ui menu secondary" style={{ fontSize: "20px" }}>
        <Link to="/" className="item">
          Home
        </Link>

        <Link to="/AboutMe" className="item">
          About Me
        </Link>
      </MenuHeader>
    );
  }
}

export default Navigation;
