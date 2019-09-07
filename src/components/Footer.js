import React from "react";
import "../themes/footer.css";
import styled, { withTheme } from "styled-components";
import { FooterDiv } from "../themes/styles";
import { device } from "../themes/deviceConfig";

import { data } from "../data/footerData";

const Icon = styled.i`
  font-size: 30px !important;
  color: ${props => (props.theme.mode === "dark" ? "#EEE" : "#111")};

  @media ${device.mobileM} {
    font-size: 40px !important;
  }
  @media ${device.mobileL} {
    font-size: 60px !important;
  }
  @media ${device.tablet} {
    font-size: 70px !important;
  }
  @media ${device.laptop} {
    font-size: 80px !important;
  }
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
