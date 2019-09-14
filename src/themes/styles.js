import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./deviceConfig";

export const Content = styled.p`
  font-size: 27px;
  padding-top: 25px;
`;

export const ContentHeader = styled.h1`
  font-size: 50px;
  padding-top: 100px;

  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;

export const Header = styled.h1`
  font-size: 75px;
  font-family: "Satisfy", cursive;
  left: 0;
  position: absolute;
  text-align: center;
  top: 35%;
  width: 100%;

  @media ${device.mobileL} {
    font-size: 150px;
    top: 30%;
  }
  @media ${device.tablet} {
    font-size: 165px;
    top: 25%;
  }
  @media ${device.laptop} {
    font-size: 225px;
    top: 25%;
  }
  @media ${device.laptopL} {
    font-size: 300px;
    top: 22%;
  }
`;

export const FooterDiv = styled.div`
  top: 65%;
  left: 15%;
  position: absolute;

  @media ${device.mobileS} {
    top: 50%;
    left: 25%;
  }
  @media ${device.mobileM} {
    top: 55%;
    left: 15%;
  }
  @media ${device.mobileL} {
    top: 85%;
    left: 15%;
  }
  @media ${device.tabletS} {
    top: 60%;
    left: 35%;
  }
  @media ${device.tablet} {
    top: 53%;
    left: 35%;
  }
  @media ${device.laptop} {
    top: 75%;
    left: 35%;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-family: "Libre Caslon Text", serif;

  &:hover {
    background-color: #fffafa !important;
  }
`;

export const Picture = styled.img`
  padding: 50px;
  padding-top: 75px;
  width: 500px;

  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const Wrapper = styled.div`
  minheight: 500;
  padding: 1em 0em;
  text-align: center;
`;
