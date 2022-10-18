import React from "react";
import "../App.css";

function Display(props) {
  return (
    <div className="DisplaySection">
      {!props.pokemonChosen ? (
        <h1>Search for a Pokemon</h1>
      ) : (
        <div className="PokeDetails">
          {/*Add css styles as that of card*/}
          <h1>{props.pokemon.name}</h1>
          <img src={props.pokemon.img} alt={`${props.pokemon.name}`} />
          <h3>Type: {props.pokemon.type}</h3> {/* Upper case Type */}
          <h4>HP: {props.pokemon.hp}</h4>
          <h4>Attack: {props.pokemon.attack}</h4>
          <h4>Defense: {props.pokemon.defense}</h4>
        </div>
      )}
    </div>
  );
}

export default Display;
