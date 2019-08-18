//dependencies
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//file imports
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";
import { MenuHeader } from "../themes/styles";
import "../App.css";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
},
a {
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
}
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  font-family: "Libre Caslon Text", serif;

  &:hover {
    background-color: #fffafa !important;
  }
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="ui container test">
          
          <BrowserRouter>
            <div>
              <MenuHeader className="ui secondary menu">
                <StyledLink
                  to="/"
                  className="item"
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                >
                  Home
                </StyledLink>

                <StyledLink
                  to="/AboutMe"
                  className="item"
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                >
                  About Me
                </StyledLink>

                <StyledLink
                  to="/Projects"
                  className="item"
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                >
                  Projects
                </StyledLink>

                <StyledLink
                  to="/Resume"
                  className="item"
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                >
                  Resume
                </StyledLink>

                <div className="switch">
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
