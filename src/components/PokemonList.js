import React from "react";
import Card from "./PokemonCard";

const List = props => {
  const { pokemones, query } = props;
  return (
    <ul className="cards-list">
      {pokemones
        .filter(pokemonFiltered =>
          pokemonFiltered.name.toLowerCase().includes(query.toLowerCase())
        )
        .map(pokemon => {
          return (
            <Card
              name={pokemon.name}
              image={pokemon.image}
              typeList={pokemon.typeList}
              id={pokemon.id}
            />
          );
        })}
    </ul>
  );
};

export default List;
