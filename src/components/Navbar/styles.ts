import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding-top: 10px;
  display: flex;
  background-color: #ff7c88;

  @media screen and (min-width: 565px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 565px) {
    padding-left: 10px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Title = styled.h5`
  display: none;

  @media screen and (max-width: 565px) {
    display: initial;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const TabLink = styled(Link)`
  color: black;
  background-color: #ffe01f;
  padding: 5px;
  border-radius: 5px;
  height: 25px;
  line-height: 14.5px;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const Tabs = styled.div`
  background-color: #ac1515;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 565px) {
    display: none;
  }
`;
