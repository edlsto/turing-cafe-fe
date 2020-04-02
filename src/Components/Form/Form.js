import React, { Component } from "react";
import "./Form.css";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleMakeReservation = () => {
    const newReservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      id: Date.now()
    };
    this.props.addReservation(newReservation);
    this.setState({
      name: "",
      date: "",
      time: "",
      number: ""
    });
  };

  render() {
    return (
      <div className="form">
        <input
          className="form-item form-input"
          placeholder="Name"
          onChange={e => this.handleChange(e)}
          name="name"
          value={this.state.name}
        ></input>
        <input
          className="form-item form-input"
          placeholder="Date (mm/dd)"
          onChange={e => this.handleChange(e)}
          name="date"
          value={this.state.date}
        ></input>
        <input
          className="form-item form-input"
          placeholder="Time"
          onChange={e => this.handleChange(e)}
          name="time"
          value={this.state.time}
        ></input>
        <input
          type="number"
          className="form-item form-input"
          placeholder="Number of guests"
          onChange={e => this.handleChange(e)}
          name="number"
          value={this.state.number}
        ></input>
        <button
          className="form-item make-reservation-btn"
          onClick={this.handleMakeReservation}
        >
          Make Reservation
        </button>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  addReservation: PropTypes.func
};
