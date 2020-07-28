import React from "react";
import PokemonList from "../../components/PokemonList";
import Search from "../../components/Search";

const Home = () => {
  return (
    <>
      <Search />
      <PokemonList />
    </>
  );
};

export default Home;
