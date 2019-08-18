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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="ui container test">
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
  );
};

export default App;
