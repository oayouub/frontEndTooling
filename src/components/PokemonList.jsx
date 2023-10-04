import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./CardPokemon";

const PokemonList = () => {
  const [data, setData] = useState([]);
  //fetch with axios
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => setData(res.data));
    console.log(data);
  }, []);

  const date = new Date();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon width="100px" icon="ic:twotone-catching-pokemon" />{" "}
          {/* add with iconify with 1 line */}
          <h1>Pokémon</h1>
        </div>
        <h1>{date.toLocaleDateString()}</h1>
      </div>
      <ul className="cardList">
        {data.results?.map((pokemon, i) => (
          <Card key={i} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
