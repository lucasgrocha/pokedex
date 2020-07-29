import React, { useState } from "react";
import CardItem from "../../components/CardItem";

const Favorites = () => {
  const [favored] = useState(
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
          <CardItem key={pokemon} name={pokemon} />
      ))}
    </div>
  );
};

export default Favorites;
