import React from "react";
import { Nav, Logo, Title, StyledLink } from "./styles";
import pokeball from "../../assets/pokeball.svg";

const navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">
        <Logo src={pokeball} alt="Home" title="Home" />
        <Title>Pokedex</Title>
      </StyledLink>
    </Nav>
  );
};

export default navbar;
