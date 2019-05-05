import React from "react";

const AboutMe = () => {
  return (
    <div
      className="aboutMe"
      style={{ minHeight: 790, padding: "1em 0em", textAlign: "center" }}
    >
      <img src={require("../images/Me.jpg")} />
      <p>
        This is where my bio will go This is where my bio will go This is where
        my bio will go This is where my bio will go This is where my bio will
        goThis is where my bio will go This is where my bio will go This is
        where my bio will go This is where my bio will goThis is where my bio
        will go This is where my bio will go This is where my bio will go
      </p>
    </div>
  );
};

export default AboutMe;
