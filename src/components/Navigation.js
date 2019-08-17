import React from "react";
import { MenuHeader, StyledLink } from "../themes/styles";

const Navigation = () => {
  return (
    <MenuHeader className="ui secondary menu">
      <StyledLink to="/" className="item">
        Home
      </StyledLink>

      <StyledLink to="/AboutMe" className="item">
        About Me
      </StyledLink>

      <StyledLink to="/Projects" className="item">
        Projects
      </StyledLink>

      <StyledLink to="/Resume" className="item">
        Resume
      </StyledLink>
    </MenuHeader>
  );
};

export default Navigation;
