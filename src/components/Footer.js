import React from "react";
import { Icon } from "../themes/CustomFooter";
import "../themes/footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <a
        href="https://www.linkedin.com/in/ronakpatel6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="linkedin icon footericon" id="linkedin" size="huge" />
      </a>
      <a
        href="https://medium.com/@ronakpatel0609"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="medium icon footericon" id="medium" size="huge" />
      </a>
      <a
        href="https://www.github.com/Ronak06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="github icon footericon" id="github" size="huge" />
      </a>
      <a
        href="mailto:ronak1.patel@ryerson.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="envelope outline icon footericon" id="mail" size="huge" />
      </a>
    </div>
  );
};

export default Footer;
