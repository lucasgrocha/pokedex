import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 10px 0;
  display: flex;
  background-color: #ff7c88;

  @media screen and (min-width: 565px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 565px) {
    padding-left: 10px;
  }
`;

export const Logo = styled.img`
  width: 40px;
`;

export const Title = styled.h5`
  display: none;
  margin-left: 10px;

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
