import React from "react";
import "../stylesheets/App.css";
import Filter from "./Filter.js";
import List from "./PokemonList.js";

import data from "../services/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [],
      query: ""
    };
    this.queryPokemon = this.queryPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData() {
    data().then(data => {
      for (let item of data.results) {
        fetch(item.url)
          .then(response => response.json())
          .then(pokemon => {
            const typesArray = [];
            for (let type of pokemon.types) {
              typesArray.push(type.type.name);
            }
            const bichejos = {
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              id: pokemon.id,
              typeList: typesArray
            };
            this.setState({
              pokemones: [...this.state.pokemones, bichejos]
            });
          });
      }
    });
  }

  queryPokemon(e) {
    const query = e.currentTarget.value;
    this.setState({ query: query });
  }

  render() {
    const { pokemones, query } = this.state;
    return (
      <div className="App">
        <Filter query={query} queryPokemon={this.queryPokemon} />
        <List pokemones={pokemones} query={query} />
      </div>
    );
  }
}

export default App;
