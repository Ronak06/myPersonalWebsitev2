import React from "react";
import { Icon } from "semantic-ui-react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/ronakpatel6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" id="linkedin" size="huge" />
      </a>
      <a
        href="https://medium.com/@ronakpatel0609"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="medium m" id="medium" size="huge" />
      </a>
      <a
        href="https://www.github.com/Ronak06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" id="github" size="huge" />
      </a>
      <a
        href="mailto:ronak1.patel@ryerson.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="mail outline" id="mail" size="huge" />
      </a>
      <p>
        <Icon name="copyright outline" size="large" />
        Ronak Patel 2019
      </p>
    </div>
  );
};

export default Footer;
