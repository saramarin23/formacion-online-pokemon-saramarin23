import React from "react";
import "../stylesheets/App.css";
import Filter from "./Filter.js";

import data from "../services/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    data().then(data => {
      this.setState({
        data: data.results
      });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;
