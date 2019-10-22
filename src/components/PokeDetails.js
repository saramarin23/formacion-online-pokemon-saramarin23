import React from "react";
import { Link } from "react-router-dom";

const PokeDetails = props => {
  const { routerProps, pokemones } = props;
  const characterID = parseInt(routerProps.match.params.id);
  const character = pokemones.filter(item => item.id === characterID);
  if (character[0]) {
    const { name, image, id } = character[0];
    console.log(character[0]);
    return (
      <React.Fragment>
        <div>
          <Link to="/" className="app-back">
            <i className="fas fa-arrow-left"></i>
            <p>Volver</p>
          </Link>
        </div>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <img src={image} alt={name} />
          <p># {id}</p>
        </div>
        <div>
          <div>
            <h3>Profile</h3>
          </div>
          <ul>
            <li>Height: </li>
            <li>Catch Rate: </li>
            <li>Egg Groups: </li>
            <li>Abilities: </li>
            <li>Weight: </li>
            <li>Gender Ratio: </li>
            <li>Hatch Steps: </li>
            <li>EVs: </li>
          </ul>
          <div>
            <h3>Evolutions</h3>
            <p>{name} evolves into at level .</p>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/" className="app-back">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <p>Ese pokemon no existe (aún)</p>
      </React.Fragment>
    );
  }
};

export default PokeDetails;
