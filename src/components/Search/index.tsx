import React, { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import pokemonService from "../../services/pokemonService";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<object>();

  const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const handleUserClick = () => {
    setLoading(true);

    pokemonService
      .show(searchTerm)
      .then((response) => {
        setPokemonData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!!pokemonData) {
      navigate("details", { replace: false, state: { ...pokemonData } });
    }
  }, [pokemonData, navigate]);

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
