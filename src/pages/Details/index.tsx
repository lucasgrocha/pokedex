import React, { useEffect, useState } from "react";
import api from "../../services/api";

//   - Passos da Evolução // missing in api

interface Property {
  hp: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  attack: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  defense: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  speed: {
    base_stat: number;
    effort: number;
    stat: object;
  };
}

const Details = () => {
  const pokemonData = window.history.state.usr;
  const imageURL = pokemonData.sprites.front_default;
  const { height, name, types, stats, id } = pokemonData;
  const [evolutionURL, setEvolutionUrl] = useState<string>();

  let filteredProperties = {} as Property;
  const propertiesObj = stats
    .filter((stat: any) => {
      return ["hp", "attack", "defense", "speed"].includes(stat.stat.name);
    })
    .map((stat: any) => {
      const propertyName = stat.stat.name;
      return { [propertyName]: stat };
    });

  for (const property of propertiesObj) {
    filteredProperties = { ...filteredProperties, ...property };
  }

  findEvolutionUrl();

  useEffect(() => {
    if (!!evolutionURL) {
      api.get(evolutionURL).then((response) => {
        const evolutions = response.data.chain;
        console.log(evolutions);
      });
    }
  }, [evolutionURL]);

  function findEvolutionUrl() {
    api.get(`pokemon-species/${id}`).then((response) => {
      setEvolutionUrl(response.data.evolution_chain.url);
    });
  }

  return (
    <>
      <img src={imageURL} alt="Pokemon" />
      <p>{name}</p>
      <p>id: {id}</p>
      <p>Height: {height / 10}</p>
      <p>HP: {filteredProperties.hp.base_stat}</p>
      <p>Speed: {filteredProperties.speed.base_stat}</p>
      <p>attack: {filteredProperties.attack.base_stat}</p>
      <p>defense: {filteredProperties.defense.base_stat}</p>
    </>
  );
};

export default Details;
