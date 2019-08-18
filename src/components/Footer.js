import React from "react";
import "../themes/footer.css";
import styled, { withTheme } from "styled-components";

const Icon = styled.i`
  font-size: 40px !important;
  color: ${props => props.theme.mode === "dark" ? "#EEE" : "#111"};
`;

const Footer = (props) => {
  return (
    <div className="wrapper">
      <a
        href="https://www.linkedin.com/in/ronakpatel6/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <Icon className="linkedin icon" id="linkedin" size="huge" />
      </a>
      <a
        href="https://medium.com/@ronakpatel0609"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="medium icon" id="medium" size="huge" />
      </a>
      <a
        href="https://www.github.com/Ronak06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="github icon" id="github" size="huge" />
      </a>
      <a
        href="mailto:ronak1.patel@ryerson.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="envelope outline icon" id="mail" size="huge" />
      </a>
    </div>
  );
};

export default withTheme(Footer);
