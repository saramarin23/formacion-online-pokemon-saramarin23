import React from "react";

const Card = props => {
  console.log(props.image);
  return (
    <li key={props.name}>
      <div>
        <h2>{props.name}</h2>
        <img alt={props.name} src={props.image} />
        {/* {console.log(props.url)} */}
      </div>
    </li>
  );
};

export default Card;
