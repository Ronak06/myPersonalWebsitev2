import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.p`
  font-size: 27px;
  padding-top: 25px;
`;

export const Header = styled.h1`
  font-size: 200px;
  font-family: "Satisfy", cursive;
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  text-align: center;
  top: 30%;
  width: 100%;
`;

export const ProjectHeader = styled.h1`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
`;

export const FooterHeader = styled.h3`
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  top: 55%;
  width: 100%;
`;

export const MenuHeader = styled.div``;

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
