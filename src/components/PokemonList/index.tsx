import React, { useState, useEffect, useCallback } from "react";
import pokemonService from "../../services/pokemonService";
import TileItem from "../CardItem";
import Paginate from "../Paginate";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList = () => {
  const [activePage, setActivePage] = useState(
    Number(sessionStorage.getItem("last_page")) || 1
  );
  const [pagesCount, setPagesCount] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const retrievePokemons = useCallback(async () => {
    const response = await pokemonService.index(activePage);
    const { results, count } = response["data"];
    setPokemons(results);
    setPagesCount(count);
  }, [activePage]);

  useEffect(() => {
    retrievePokemons();
  }, [retrievePokemons]);

  useEffect(() => {
    retrievePokemons();
  }, [activePage, retrievePokemons]);

  const handlePageChanged = (currentPage: number) => {
    sessionStorage.setItem("last_page", currentPage.toString());
    setActivePage(currentPage);
  };

  const pokemonList = pokemons.map((pokemon) => (
    <TileItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pokemonList}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paginate
          totalItems={pagesCount}
          activePage={activePage}
          changed={handlePageChanged}
        />
      </div>
    </>
  );
};

export default PokemonList;
