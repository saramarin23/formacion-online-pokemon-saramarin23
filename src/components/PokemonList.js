import React from "react";
import Card from "./PokemonCard";

const List = props => {
  const { pokemones } = props;
  // console.log(pokemones);
  return (
    <ul>
      {pokemones.map(pokemon => {
        return (
          <Card
            name={pokemon.name}
            image={pokemon.image}
            typeList={pokemon.typeLists}
          />
        );
      })}
    </ul>
  );
};

export default List;
