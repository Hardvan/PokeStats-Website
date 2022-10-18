import React from "react";
import Table from "./Table";

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.pokemon.img}
        alt={props.pokemon.name}
      />
      <div className="card-body">
        <h1 className="card-title">{props.pokemon.name}</h1>
      </div>
      <Table pokemon={props.pokemon} />
    </div>
  );
}

export default Card;
