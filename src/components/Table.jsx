import React from "react";

function Table(props) {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Type</th>
            <td>{props.pokemon.type}</td>
          </tr>
          <tr>
            <th scope="row">HP</th>
            <td>{props.pokemon.hp}</td>
          </tr>
          <tr>
            <th scope="row">Attack</th>
            <td>{props.pokemon.attack}</td>
          </tr>
          <tr>
            <th scope="row">Defense</th>
            <td>{props.pokemon.defense}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
