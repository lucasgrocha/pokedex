import React from "react";
import { Nav, Logo, Title, StyledLink, TabLink, Tabs } from "./styles";
import pokeball from "../../assets/pokeball.svg";

const navbar = () => {
  return (
    <Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLink to="/">
          <Logo src={pokeball} alt="Home" title="Home" />
          <Title>Home</Title>
        </StyledLink>
        <Title>&nbsp;|&nbsp;</Title>
        <StyledLink to="/favorites">
          <Title>Favorites</Title>
        </StyledLink>
      </div>
      <Tabs>
        <TabLink to="/favorites">Favorites</TabLink>
      </Tabs>
    </Nav>
  );
};

export default navbar;
