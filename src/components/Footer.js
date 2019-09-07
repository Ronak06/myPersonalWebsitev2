import React from "react";
import "../themes/footer.css";
import styled, { withTheme } from "styled-components";
import { FooterDiv } from "../themes/styles";
import { device } from "../themes/deviceConfig";

import { data } from "../data/footerData";

const Icon = styled.i`
  font-size: 80px !important;
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};
`;

const Footer = () => {
  const footerIcons = [];

  data.forEach(item => {
    const iconClass = item.name + " icon";
    footerIcons.push(
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        key={item.id}
      >
        <Icon className={iconClass} id={item.name} />
      </a>
    );
  });

  return <FooterDiv>{footerIcons}</FooterDiv>;
};

export default withTheme(Footer);
