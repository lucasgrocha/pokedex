import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Table } from "react-bootstrap";
import pokemonTypesSelector from "../../helpers/pokemonTypesSelector";
import pokemonService from "../../services/pokemonService";
import { useParams, Link } from "react-router-dom";
import { DetailBox, PokemonImage } from "./styles";
import Favorite from "../../components/UI/Favorite";
import retrievePokemonEvolutions from "../../helpers/retrievePokemonEvolutions";
import PokemonEvolutions from "../../components/PokemonEvolutions";

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
  const [height, setHeight] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState<number>();
  const [stats, setStats] = useState<object[]>([]);
  const [loading, setLoading] = useState(false);
  const [evolutionURL, setEvolutionUrl] = useState<string>();
  const [typeNames, setTypeNames] = useState<string[]>();
  const [filteredProperties, setFilteredProperties] = useState<Property>();
  const [notFound, setNotFound] = useState(false);
  const [evolutions, setEvolutions] = useState<{}[]>([]);

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
  }, [searchTerm]);

  useEffect(() => {
    if (!!pokemonData) {
      const { height, name, types, stats, id } = pokemonData;
      setHeight(height);
      setName(name);
      setStats(stats);
      setId(id);
      setTypeNames(pokemonTypesSelector(types));
    }
  }, [pokemonData]);

  useEffect(() => {
    if (!!stats) {
      let filtered = {} as Property;
      // console.log(stats);
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
      // console.log(filtered);
    }
  }, [stats]);

  useEffect(() => {
    if (!!evolutionURL) {
      retrievePokemonEvolutions(evolutionURL).then((data) => {
        setEvolutions(data);
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

  useEffect(() => {
    // console.log(evolutions);
  }, [evolutions]);

  const details = (
    <>
      <DetailBox>
        {!!id && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <PokemonImage
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
              alt="Pokemon"
            />
            <h1 className="text-uppercase">{name}</h1>
            <Favorite pokemonName={name} />
          </div>
        )}
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
            {filteredProperties &&
              Object.keys(filteredProperties).length !== 0 && (
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
      <div>
        {evolutions.length > 0 && <PokemonEvolutions evolutions={evolutions} />}
      </div>
    </>
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
