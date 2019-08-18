import React, { useState } from "react";
import { MenuHeader } from "../themes/styles";

import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const StyledLink = styled(Link)`
  font-size: 15px;
  font-family: "Libre Caslon Text", serif;

  &:hover {
    background-color: #fffafa !important;
  }
`;

const Navigation = props => {
  return (
    <MenuHeader className="ui secondary menu">
      <StyledLink
        to="/"
        className="item"
        style={{ color: props.theme.mode === "dark" ? "#EEE" : "#111" }}
      >
        Home
      </StyledLink>

      <StyledLink
        to="/AboutMe"
        className="item"
        style={{ color: props.style.mode === "dark" ? "#EEE" : "#111" }}
      >
        About Me
      </StyledLink>

      <StyledLink
        to="/Projects"
        className="item"
        style={{ color: props.style.mode === "dark" ? "#EEE" : "#111" }}
      >
        Projects
      </StyledLink>

      <StyledLink
        to="/Resume"
        className="item"
        style={{ color: props.style.mode === "dark" ? "#EEE" : "#111" }}
      >
        Resume
      </StyledLink>
    </MenuHeader>
  );
};

export default withTheme(Navigation);
