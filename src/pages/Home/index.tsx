import React, { useState, useEffect } from "react";
import pokemonService from "../../services/pokemonService";
import TileItem from "../../components/TileItem";
import Paginate from "../../components/Paginate";

interface Pokemon {
  name: string;
  url: string;
}

const Home = () => {
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const retrievePokemons = async () => {
    const response = await pokemonService.index(activePage);
    console.log(response.data);
    const { next, results, count, previous } = response["data"];
    setNextPage(next);
    setPokemons(results);
    setPreviousPage(previous);
    setPagesCount(count); // 10 -> pagination offset
  };

  useEffect(() => {
    retrievePokemons();
  }, []);

  useEffect(() => {
    retrievePokemons();
  }, [activePage]);

  const handlePageChanged = (currentPage: number) => {
    setActivePage(currentPage);
  };

  const pokemonList = pokemons.map((pokemon) => (
    <TileItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
  ));

  return (
    <>
      {pokemonList}
      <Paginate
        totalItems={pagesCount}
        activePage={activePage}
        changed={handlePageChanged}
      />
    </>
  );
};

export default Home;
