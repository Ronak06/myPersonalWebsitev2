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
  const [theme, setTheme] = useState({ mode: "light" });
  const [active, setActive] = useState({ item: window.location.pathname });

  return (
    <MenuHeader className="ui secondary pointing menu">
      <StyledLink
        to="/"
        className={active.item === "/" ? "item active" : "item"}
        style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
        onClick={() => setActive({ item: "/" })}
      >
        Home
      </StyledLink>

      <StyledLink
        to="/AboutMe"
        className={active.item === "/AboutMe" ? "item active" : "item"}
        style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
        onClick={() => setActive({ item: "/AboutMe" })}
      >
        About Me
      </StyledLink>

      <StyledLink
        to="/Projects"
        className={active.item === "/Projects" ? "item active" : "item"}
        style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
        onClick={() => setActive({ item: "/Projects" })}
      >
        Projects
      </StyledLink>

      <div className="switch right menu">
        <input
          id="cmn-toggle-1"
          className="cmn-toggle cmn-toggle-round"
          type="checkbox"
          onClick={e =>
            setTheme(
              theme.mode === "light" ? { mode: "dark" } : { mode: "light" }
            )
          }
        />
        <label htmlFor="cmn-toggle-1" />
      </div>
    </MenuHeader>
  );
};

export default withTheme(Navigation);
