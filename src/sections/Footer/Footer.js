import React from "react";
import { Icon } from "semantic-ui-react";

import "./Footer.css";

const Footer = () => {
  return (
    <div
      class="footer"
      style={{ minHeight: 250, padding: "1em 0em", textAlign: "center" }}
    >
      <h2>
        <Icon name="linkedin" id="linkedin" size="big" />
        <Icon name="medium" id="medium" size="big" />
        <Icon name="github" id="github" size="big" />
        <Icon name="mail outline" id="mail" size="big" />
      </h2>

      <p>
        <Icon name="copyright outline" size="large" />
        Ronak Patel 2019
      </p>
    </div>
  );
};

export default Footer;
