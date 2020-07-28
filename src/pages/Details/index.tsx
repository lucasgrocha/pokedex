import React from "react";

// - Nome
//   - Imagem
//   - Altura
//   - Lista de Tipos
//   - Velocidade
//   - Defesa
//   - Ataque
//   - HP
//   - Passos da Evolução // missing in api

const Details = () => {
  const pokemonData = window.history.state.usr;

  console.log(pokemonData);
  return (
    <>
      <p>Details</p>
    </>
  );
};

export default Details;
