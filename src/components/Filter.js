import React from "react";

const Filter = props => {
  return (
    <div>
      <input
        className="search-input"
        type="search"
        value={props.query}
        onChange={props.queryPokemon}
        placeholder="Busca tu pokemon aquí"
      />
    </div>
  );
};

export default Filter;
