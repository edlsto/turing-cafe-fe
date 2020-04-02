import React from "react";
import "./Card.css";

const Card = ({ name, date, number, time, id }) => {
  return (
    <div className="card">
      <div className="reservation-name reservation-category">{name}</div>
      <div className="reservation-category">{date}</div>
      <div className="reservation-category">{time}</div>
      <div className="reservation-category">Number of guests: {number}</div>
      <button className="cancel-btn">Cancel</button>
    </div>
  );
};

export default Card;