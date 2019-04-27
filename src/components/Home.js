import React from "react";
import Typed from "react-typed";

import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div
      className="home"
      style={{ minHeight: 790, padding: "1em 0em", textAlign: "center" }}
    >
      <h1 style={{ color: "red" }}>
        <Typed
          strings={[
            "Welcome!",
            "My name is Ronak Patel.",
            "and this is My Website!"
          ]}
          typeSpeed={100}
          loop
        />
      </h1>
    </div>
  );
};

export default Home;
