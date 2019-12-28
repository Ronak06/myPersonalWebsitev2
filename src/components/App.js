//dependencies
import React, { useState, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//file imports
import AboutMe from "./sections/AboutMe";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import NotFound from "./sections/NotFound";
import ScrollUpButton from "react-scroll-up-button";
import "../themes/toggleSwitch.css";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#1c213d" : "#faf1f0"};
  color: ${props => (props.theme.mode === "dark" ? "#ffffff" : "#000")};
},
a {
  color: ${props => (props.theme.mode === "dark" ? "#ffffff" : "#000")};
}
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  font-family: "Libre Caslon Text", serif;
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });
  // const [active, setActive] = useState({ item: "/AboutMe" });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <div className="ui container">
          <BrowserRouter>
            <div>
              <div className="ui stackable secondary menu">
                <StyledLink
                  to="/"
                  className={"item"}
                  // className={active.item === "/" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  // onClick={() => setActive({ item: "/" })}
                >
                  Home
                </StyledLink>
                <StyledLink
                  to="/AboutMe"
                  className={"item"}
                  // className={
                  //   active.item === "/AboutMe" ? "item active" : "item"
                  // }
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  // onClick={() => setActive({ item: "/AboutMe" })}
                >
                  About Me
                </StyledLink>
                <StyledLink
                  to="/Projects"
                  className={"item"}
                  // className={
                  //   active.item === "/Projects" ? "item active" : "item"
                  // }
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  // onClick={() => setActive({ item: "/Projects" })}
                >
                  Projects
                </StyledLink>
                <StyledLink
                  to="/Resume"
                  className={"item"}
                  // className={active.item === "/Resume" ? "item active" : "item"}
                  style={{ color: theme.mode === "dark" ? "#EEE" : "#111" }}
                  // onClick={() => setActive({ item: "/Resume" })}
                >
                  Resume
                </StyledLink>
                <div
                  className="switch right menu"
                  style={{ flexDirection: "row" }}
                >
                  {theme.mode === "light" ? (
                    <i
                      className="large sun icon"
                      style={{
                        position: "relative",
                        top: "10px"
                      }}
                    ></i>
                  ) : (
                    <i
                      className="large sun outline icon"
                      style={{
                        position: "relative",
                        top: "10px"
                      }}
                    ></i>
                  )}
                  <input
                    id="cmn-toggle-1"
                    className="cmn-toggle cmn-toggle-round"
                    type="checkbox"
                    onClick={e =>
                      setTheme(
                        theme.mode === "light"
                          ? { mode: "dark" }
                          : { mode: "light" }
                      )
                    }
                  />
                  <label htmlFor="cmn-toggle-1" />
                  {theme.mode === "light" ? (
                    <i
                      className="large moon outline icon"
                      style={{
                        position: "relative",
                        top: "10px"
                      }}
                    ></i>
                  ) : (
                    <i
                      className="large moon icon"
                      style={{
                        position: "relative",
                        top: "10px"
                      }}
                    ></i>
                  )}
                </div>
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutMe" component={AboutMe} />
                <Route exact path="/Projects" component={Projects} />
                <Route exact path="/Resume" component={Resume} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={50}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={{
              backgroundColor: "black",
              borderRadius: "10px"
            }}
            ToggledStyle={{}}
          />
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
