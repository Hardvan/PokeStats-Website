import React, { useState } from "react";
import Axios from "axios";
import Display from "./Display";

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  // API call
  function searchPokemon() {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
      (response) => {
        // console.log(response); // Seeing the data

        setPokemon({
          name: pokeName,
          species: response.data.species,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
        setPokeName(""); // Clearing entry field
      }
    );
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input
          onChange={(event) => {
            const value = event.target.value;
            setPokeName(value);
          }}
          type="text"
          value={pokeName}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>

      <Display pokemonChosen={pokemonChosen} pokemon={pokemon} />
    </div>
  );
}

export default App;
