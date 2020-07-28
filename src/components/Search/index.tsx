import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import pokemonService from "../../services/pokemonService";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  // - Nome
  //   - Imagem
  //   - Altura
  //   - Lista de Tipos
  //   - Velocidade
  //   - Defesa
  //   - Ataque
  //   - HP 
  //   - Passos da Evolução // missing in api

  const handleUserClick = () => {
    setLoading(true);

    pokemonService
      .show(searchTerm)
      .then((response) => {
        const { name, sprites, height, types, stats } = response.data
        console.log(name, height, types, stats, sprites)
        setLoading(false);
      })
      .catch((err) => {
        console.log("Not found");
        setLoading(false);
      });
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Pokemon's name or number"
          onChange={handleUserInput}
        />
        <InputGroup.Append>
          <Button className="btn-primary" onClick={handleUserClick}>
            {loading ? "Wait" : "Search"}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
