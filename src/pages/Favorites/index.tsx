import React, { useState } from "react";
import CardItem from "../../components/CardItem";

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
          <CardItem name={pokemon} />
      ))}
    </div>
  );
};

export default Favorites;
