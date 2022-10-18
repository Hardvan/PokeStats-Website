import React from "react";
import Table from "./Table";

function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={props.pokemon.img}
        alt={props.pokemon.name}
      />
      <div class="card-body">
        <h1 class="card-title">{props.pokemon.name}</h1>
      </div>
      <Table pokemon={props.pokemon} />
    </div>
  );
}

// <table class="table">
//         <thead class="thead-dark">
//           <tr>
//             <th scope="col">Type</th>
//             <th scope="col">HP</th>
//             <th scope="col">Attack</th>
//             <th scope="col">Defense</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">{props.type}</th>
//             <td>{props.hp}</td>
//             <td>{props.attack}</td>
//             <td>{props.defense}</td>
//           </tr>
//         </tbody>
//       </table>

// <div class="card" style={{ width: "18rem" }}>
//       <img class="card-img-top" src={props.img} alt={props.name} />
//       <div class="card-body">
//         <h5 class="card-title">{props.name}</h5>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">Type: {props.type}</li>
//         <li class="list-group-item">HP: {props.hp}</li>
//         <li class="list-group-item">Attack: {props.attack}</li>
//         <li class="list-group-item">Defense: {props.defense}</li>
//       </ul>
//     </div>

export default Card;
