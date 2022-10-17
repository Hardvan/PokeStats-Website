import "./App.css";
import { useState } from "react";
import Axios from "axios";

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
  const searchPokemon = () => {
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
      }
    );
  };

  // Setting Pokemon Name from input field
  // Can be converted to arrow function inside onChange
  // and then converted to separate Hook
  function handleChange(event) {
    const value = event.target.value;
    setPokeName(value);
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Stats</h1>
        <input onChange={handleChange} type="text" />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>Please choose a pokemon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt={`${pokemon.name}`} />
            <h3>Type: {pokemon.type}</h3> {/* Upper case Type */}
            <h4>HP: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
