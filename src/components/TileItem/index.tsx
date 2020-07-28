import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { StyledDetails } from "./styles";
import Modal from "../UI/Modal";

interface Props {
  name: string;
  url: string;
}

const TileItem: React.FC<Props> = (props) => {
  const [click, setClick] = useState(false);

  const handlePokemonClicked = (pokemonURL: string) => {
    console.log(pokemonURL);
    setClick(true);
  };

  const handleUserClick = () => {
    console.log(!click);
    setClick(!click);
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <Card>
        <Card.Body style={{ padding: "10px 1.5rem" }}>
          <h4>{props.name}</h4>
          <StyledDetails onClick={() => handlePokemonClicked(props.url)}>
            Details
          </StyledDetails>
        </Card.Body>
      </Card>
      <Modal
        title={`${props.name} details`}
        clicked={() => handleUserClick()}
        show={click}
      >
        <h1>Modal content</h1>
      </Modal>
    </div>
  );
};

export default TileItem;
