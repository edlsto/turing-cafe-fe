import React, { Component } from "react";
import "./App.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import Form from "../Form/Form";

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

  addReservation = reservation => {
    this.setState({ reservations: [reservation, ...this.state.reservations] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form className="resy-form" addReservation={this.addReservation} />
        <CardsContainer
          className="resy-container"
          reservations={this.state.reservations}
        />
      </div>
    );
  }
}

export default App;
