import React from "react";
// import Filter from "./Filter.js";
// import List from "./PokemonList.js";
import data from "../services/data";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PokeDetails from "./PokeDetails";
import "../stylesheets/App.css";

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
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  // inputSearch={this.inputSearch}
                  query={query}
                  // data={data}
                  // gender={gender}
                  // handleSelect={this.handleSelect}
                  queryPokemon={this.queryPokemon}
                  pokemones={pokemones}
                />
              );
            }}
          />
          <Route
            path="/pokemon-detail/:id"
            render={routerProps => {
              return (
                <PokeDetails routerProps={routerProps} pokemones={pokemones} />
              );
            }}
          />
          {/* <Filter query={query} queryPokemon={this.queryPokemon} />
        <List pokemones={pokemones} query={query} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
