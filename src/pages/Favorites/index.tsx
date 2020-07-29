import React, { useState } from "react";
import CardItem from "../../components/CardItem";
import Favorite from "../../components/UI/Favorite";

const Favorites = () => {
  const [favored, setFavored] = useState(
    JSON.parse(localStorage.getItem("favorites_pokemon") || "[]")
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {favored.map((pokemon: string) => (
        <div
          key={pokemon}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardItem name={pokemon} />
          <Favorite pokemonName={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
