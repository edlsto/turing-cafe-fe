import React, { Component } from "react";
import "./App.css";
import CardsContainer from "../CardsContainer/CardsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }));
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <CardsContainer
          className="resy-container"
          reservations={this.state.reservations}
        />
      </div>
    );
  }
}

export default App;
