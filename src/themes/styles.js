import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./deviceConfig";

export const Content = styled.p`
  font-size: 27px;
  padding-top: 25px;
`;

export const Header = styled.h1`
  font-size: 75px;
  font-family: "Satisfy", cursive;
  left: 0;
  position: absolute;
  text-align: center;
  top: 25%;
  width: 100%;

  @media ${device.mobileL} {
    font-size: 150px;
    top: 20%;
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
  top: 52%;
  left: 25%;
  position: absolute;

  @media ${device.mobileS} {
    top: 40%;
    left: 25%;
  }
  @media ${device.mobileM} {
    top: 40%;
    left: 25%;
  }
  @media ${device.mobileL} {
    top: 70%;
    left: 25%;
  }
  @media ${device.tabletS} {
    top: 53%;
    left: 35%;
  }
  @media ${device.tablet} {
    top: 53%;
    left: 35%;
  }
  @media ${device.laptop} {
    top: 70%;
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
  width: 1500px;
`;

export const Wrapper = styled.div`
  minheight: 500;
  padding: 1em 0em;
  text-align: center;
`;
