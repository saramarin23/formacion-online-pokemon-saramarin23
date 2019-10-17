import React from "react";
import Card from "./PokemonCard";

const List = props => {
  const { pokemones } = props;
  // console.log(pokemones);
  return (
    <ul className="cards-list">
      {pokemones.map(pokemon => {
        return (
          <Card
            name={pokemon.name}
            image={pokemon.image}
            typeList={pokemon.typeLists}
            id={pokemon.id}
          />
        );
      })}
    </ul>
  );
};

export default List;
