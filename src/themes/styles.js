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
  margin-top: 45%;
  margin-left: 30%;
  position: relative;
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
