import api from "../services/api";

const retrievePokemonEvolutions = async (evolutionURL: string) => {
  let evoChain: {}[] = [];
  const response = await api.get(evolutionURL);

  let evoData = response.data.chain;

  do {
    let numberOfEvolutions = evoData.evolves_to.length;
    evoChain.push({
      directEvolution: evoData.species.name,
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          alternativeEvolution: evoData.evolves_to[i].species.name,
        });
      }
    }

    evoData = evoData.evolves_to[0];
  } while (evoData != undefined && evoData.hasOwnProperty("evolves_to"));

  return evoChain;
};

export default retrievePokemonEvolutions;
