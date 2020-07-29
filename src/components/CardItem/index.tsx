import React, { useState } from "react";
import { Card, StyledName } from "./styles";
import { Link } from "react-router-dom";
import { BrokenImage } from "@styled-icons/material-outlined";

interface Props {
  name: string;
  url: string;
}

const CardItem: React.FC<Props> = (props) => {
  const [imageNotFound, setImageNotFound] = useState(false);
  return (
    <Card>
      {imageNotFound ? (
        <BrokenImage style={{ width: "120px" }} />
      ) : (
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.name}.gif`}
          alt="Pokemon"
          onError={() => {
            setImageNotFound(true);
          }}
        />
      )}
      <StyledName>{props.name}</StyledName>
      <Link to={`details/${props.name}`}>Details</Link>
    </Card>
  );
};

export default CardItem;
