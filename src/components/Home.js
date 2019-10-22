import React from "react";
import Filter from "./Filter.js";
import List from "./PokemonList.js";

const Home = props => {
  //   console.log(props);
  return (
    <React.Fragment>
      <Filter query={props.query} queryPokemon={props.queryPokemon} />
      <List pokemones={props.pokemones} query={props.query} />
    </React.Fragment>
  );
};

export default Home;
