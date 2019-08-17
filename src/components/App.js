//dependencies
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

//file imports
import AboutMe from "./AboutMe";
import Home from "./Home";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";
import "../App.css";

import SiteState from "../context/SiteState";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "#EEE")};
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
},
a {
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#000")};
}
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <SiteState>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div className="ui container test">
            <button
              onClick={e =>
                setTheme(
                  theme.mode === "light" ? { mode: "dark" } : { mode: "light" }
                )
              }
            >
              test
            </button>
            <BrowserRouter>
              <div>
                <Navigation style={theme} />
                <Route path="/" exact component={Home} />
                <Route path="/AboutMe" exact component={AboutMe} />
                <Route path="/Projects" exact component={Projects} />
                <Route path="/Resume" exact component={Resume} />
              </div>
            </BrowserRouter>
          </div>
        </>
      </ThemeProvider>
    </SiteState>
  );
};

export default App;
