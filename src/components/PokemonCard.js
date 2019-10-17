import React from "react";

const renderTypes = pokemon => {
  return pokemon.map((type, index) => (
    <li className="types-list_item" key={index}>
      {type}
    </li>
  ));
};

const Card = props => {
  return (
    <li className="card" key={props.id}>
      <div className="card-fcontainer">
        <div className="card-image_container">
          <img className="card-image" alt={props.name} src={props.image} />
        </div>
        <p className="id-container">ID / {props.id}</p>
      </div>
      <div className="card-details">
        <h2>{props.name}</h2>
        <ul className="types-list">{renderTypes(props.typeList)}</ul>
      </div>
    </li>
  );
};

export default Card;
