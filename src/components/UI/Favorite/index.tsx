import React, { useState, useEffect } from "react";
import { StarOutline, StarFilled } from "./styles";

interface Props {
  pokemonName: string;
}

const Favorite: React.FC<Props> = (props) => {
  const [favored, setFavored] = useState(false);

  const handleFavoredPokemon = () => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem("favorites_pokemon") || "[]"
    );
    if (!favorites.includes(props.pokemonName)) {
      localStorage.setItem(
        "favorites_pokemon",
        JSON.stringify([...favorites, props.pokemonName])
      );
      setFavored(true);
    } else {
      const newArr = [...favorites].filter(
        (favorite) => favorite !== props.pokemonName
      );
      localStorage.setItem("favorites_pokemon", JSON.stringify([...newArr]));
      setFavored(false);
    }
  };

  useEffect(() => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem("favorites_pokemon") || "[]"
    );
    setFavored(favorites.includes(props.pokemonName));
  }, [props.pokemonName]);

  return (
    <>
      {favored ? (
        <StarFilled onClick={handleFavoredPokemon} />
      ) : (
        <StarOutline onClick={handleFavoredPokemon} />
      )}
    </>
  );
};

export default Favorite;
