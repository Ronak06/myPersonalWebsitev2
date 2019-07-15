import React, { Component } from "react";
import { MenuHeader, StyledLink } from "../themes/styles";

class Navigation extends Component {
  render() {
    return (
      <MenuHeader className="ui menu secondary">
        <StyledLink to="/" className="item">
          Home
        </StyledLink>

        <StyledLink to="/AboutMe" className="item">
          About Me
        </StyledLink>

        <StyledLink to="/Projects" className="item">
          Projects
        </StyledLink>
      </MenuHeader>
    );
  }
}

export default Navigation;
