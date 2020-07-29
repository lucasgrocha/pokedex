import React, { Fragment } from "react";
import { Box, Circle, Image, Arrow } from "./styles";

interface Props {
  evolutions: {
    directEvolution?: string;
    alternativeEvolution?: string;
  }[];
}

const PokemonEvolutions: React.FC<Props> = (props) => {
  const evolutions = props.evolutions.map(
    (evo) => evo.directEvolution || evo.alternativeEvolution
  );

  return (
    <Box>
      {evolutions.map((evo) => (
        <Fragment key={evo}>
          <Circle to={`/details/${evo}`}>
            <Image
              src={`https://img.pokemondb.net/sprites/platinum/normal/${evo}.png`}
              title={evo}
            />
          </Circle>
          {evo !== evolutions.slice(-1)[0] && <Arrow />}
        </Fragment>
      ))}
    </Box>
  );
};

export default PokemonEvolutions;
