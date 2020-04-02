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
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number
      })
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          reservations: [...this.state.reservations, data]
        })
      );
  };

  deleteReservation = id => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form className="resy-form" addReservation={this.addReservation} />
        <CardsContainer
          className="resy-container"
          reservations={this.state.reservations}
          deleteReservation={this.deleteReservation}
        />
      </div>
    );
  }
}

export default App;
