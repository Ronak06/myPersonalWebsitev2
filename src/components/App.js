//dependencies
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//file imports
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import { MenuHeader } from "../themes/styles";
import "../App.css";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#1c213d" : "#faf1f0")};
  color: ${props => (props.theme.mode === "dark" ? "#ffffff" : "#000")};
},
a {
  color: ${props => (props.theme.mode === "dark" ? "#ffffff" : "#000")};
}
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  font-family: "Libre Caslon Text", serif;
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });
  const [active, setActive] = useState({ item: window.location.pathname });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="ui container">
          <BrowserRouter>
            <div>
              <MenuHeader className="ui secondary pointing menu">
                <StyledLink
                  to="/"
                  className={active.item === "/" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "/"})}
                >
                  Home
                </StyledLink>

                <StyledLink
                  to="/AboutMe"
                  className={active.item === "/AboutMe" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "/AboutMe"})}
                >
                  About Me
                </StyledLink>

                <StyledLink
                  to="/Projects"
                  className={active.item === "/Projects" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "/Projects"})}
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
              <Route path="/" exact component={Home} />
              <Route path="/AboutMe" exact component={AboutMe} />
              <Route path="/Projects" exact component={Projects} />
              
            </div>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
