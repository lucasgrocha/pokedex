import React, { useState, useEffect } from "react";
import pokemonService from "../../services/pokemonService";
import TileItem from "../../components/TileItem";

interface Pokemon {
  name: string;
  url: string;
}

const Home = () => {
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [pages, setPages] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const retrieveAllPokemon = async () => {
    const response = await pokemonService.index();
    console.log(response.data);
    const { next, results, count, previous } = response["data"];
    setNextPage(next);
    setPokemons(results);
    setPreviousPage(previous);
    setPages(count / 10); // 10 -> pagination offset
  };

  useEffect(() => {
    retrieveAllPokemon();
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => (
        <TileItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </>
  );
};

export default Home;
