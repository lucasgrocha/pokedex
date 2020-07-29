import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Table } from "react-bootstrap";
import pokemonTypesSelector from "../../helpers/pokemonTypesSelector";
import pokemonService from "../../services/pokemonService";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DetailBox, PokemonImage } from "./styles";

//   - Passos da Evolução // missing in api

interface Property {
  hp: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  attack: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  defense: {
    base_stat: number;
    effort: number;
    stat: object;
  };
  speed: {
    base_stat: number;
    effort: number;
    stat: object;
  };
}

const Details = () => {
  const { searchTerm } = useParams();
  const [pokemonData, setPokemonData] = useState<any>();
  const [imageURL, setImageURL] = useState("");
  const [height, setHeight] = useState(0);
  const [name, setName] = useState(0);
  const [id, setId] = useState<number>();
  const [stats, setStats] = useState<object[]>([]);
  const [types, setTypes] = useState<object[]>();
  const [loading, setLoading] = useState(false);
  const [evolutionURL, setEvolutionUrl] = useState<string>();
  const [typeNames, setTypeNames] = useState<string[]>();
  const [filteredProperties, setFilteredProperties] = useState<Property>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonService
      .show(searchTerm)
      .then((response) => {
        setPokemonData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setNotFound(true);
      });
  }, []);

  useEffect(() => {
    if (!!pokemonData) {
      const { height, name, types, stats, id } = pokemonData;
      setHeight(height);
      setName(name);
      setTypes(types);
      setStats(stats);
      setId(id);
      setImageURL(pokemonData.sprites.front_default);
      setTypeNames(pokemonTypesSelector(types));
    }
  }, [pokemonData]);

  useEffect(() => {
    if (!!stats) {
      let filtered = {} as Property;
      console.log(stats);
      const propertiesObj = stats
        .filter((stat: any) => {
          return ["hp", "attack", "defense", "speed"].includes(stat.stat.name);
        })
        .map((stat: any) => {
          const propertyName = stat.stat.name;
          return { [propertyName]: stat };
        });

      for (const property of propertiesObj) {
        filtered = { ...filtered, ...property };
      }
      setFilteredProperties(filtered);
      console.log(filtered);
    }
  }, [stats]);

  useEffect(() => {
    if (!!evolutionURL) {
      api.get(evolutionURL).then((response) => {
        const evolutions = response.data.chain;
        console.log(evolutions);
      });
    }
  }, [evolutionURL]);

  useEffect(() => {
    if (!!id) {
      api.get(`pokemon-species/${id}`).then((response) => {
        setEvolutionUrl(response.data.evolution_chain.url);
      });
    }
  }, [id]);

  const details = (
    <DetailBox>
      {!!id && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PokemonImage
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            alt="Pokemon"
          />
        </div>
      )}
      <h1 className="text-center text-uppercase">{name}</h1>
      <Table striped bordered hover>
        <tbody className="text-center">
          <tr>
            <td>id</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{height / 10}</td>
          </tr>
          {filteredProperties && Object.keys(filteredProperties).length !== 0 && (
            <>
              <tr>
                <td>HP</td>
                <td>{filteredProperties.hp.base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{filteredProperties.speed.base_stat}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{filteredProperties.attack.base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{filteredProperties.defense.base_stat}</td>
              </tr>
              <tr>
                <td>Types</td>
                <td>
                  <strong>{typeNames?.join(" | ")}</strong>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </Table>
    </DetailBox>
  );

  if (notFound) {
    return (
      <>
        <p>Not found</p>
        <Link to="/">Home</Link>
      </>
    );
  }

  return <>{loading ? <p>Please wait</p> : details}</>;
};

export default Details;
