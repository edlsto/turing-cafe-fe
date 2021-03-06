import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, date, number, time, id, deleteReservation }) => {
  return (
    <div className="card">
      <div className="reservation-name reservation-category">{name}</div>
      <div className="reservation-category">{date}</div>
      <div className="reservation-category">{time}</div>
      <div className="reservation-category">Number of guests: {number}</div>
      <button className="cancel-btn" onClick={() => deleteReservation(id)}>
        Cancel
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  number: PropTypes.number,
  time: PropTypes.string,
  id: PropTypes.number,
  deleteReservation: PropTypes.func
};
