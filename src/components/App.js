import React from "react";
import "../stylesheets/App.css";
import Filter from "./Filter.js";
import List from "./PokemonList.js";

import data from "../services/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: []
    };
  }

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData() {
    data().then(data => {
      for (let item of data.results) {
        // console.log(item);
        fetch(item.url)
          .then(response => response.json())
          .then(pokemon => {
            // console.log(pokemon);
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

  render() {
    const { pokemones } = this.state;
    // console.log(pokemones);
    return (
      <div className="App">
        <Filter />
        <List pokemones={pokemones} />
      </div>
    );
  }
}

export default App;
