import React, { Component } from "react";
import "./App.css";
import CardsContainer from "../CardsContainer/CardsContainer";
import Form from "../Form/Form";
import {
  getData,
  postNewReservation,
  deleteFromDatabase
} from "../../api-calls.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    };
  }
  componentDidMount() {
    getData().then(data => this.setState({ reservations: data }));
  }

  addReservation = reservation => {
    postNewReservation(reservation).then(data =>
      this.setState({
        reservations: [...this.state.reservations, data]
      })
    );
  };

  deleteReservation = id => {
    deleteFromDatabase(id).then(data => this.setState({ reservations: data }));
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
