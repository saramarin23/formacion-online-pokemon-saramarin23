import React from "react";
import Card from "./PokemonCard";
import { Link } from "react-router-dom";

const List = props => {
  const { pokemones, query } = props;
  return (
    <ul className="cards-list">
      {pokemones
        .filter(pokemonFiltered =>
          pokemonFiltered.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((pokemon, index) => {
          return (
            <Link
              key={index}
              to={`/pokemon-detail/${pokemon.id}`}
              className="character__link"
            >
              <Card
                name={pokemon.name}
                image={pokemon.image}
                typeList={pokemon.typeList}
                id={pokemon.id}
              />
            </Link>
          );
        })}
    </ul>
  );
};

export default List;
