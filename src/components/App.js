//dependencies
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//file imports
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
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
  const [active, setActive] = useState({ item: "home"});

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
                  className={active.item === "home" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "home"})}
                >
                  Home
                </StyledLink>

                <StyledLink
                  to="/AboutMe"
                  className={active.item === "aboutme" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "aboutme"})}
                >
                  About Me
                </StyledLink>

                <StyledLink
                  to="/Projects"
                  className={active.item === "projects" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "projects"})}
                >
                  Projects
                </StyledLink>

                <StyledLink
                  to="/Resume"
                  className={active.item === "resume" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  onClick={() => setActive({ item: "resume"})}
                >
                  Resume
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
              <Route path="/Resume" exact component={Resume} />
            </div>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
