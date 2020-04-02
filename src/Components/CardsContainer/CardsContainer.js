import React from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const CardsContainer = ({ reservations, deleteReservation }) => {
  const cards = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
        deleteReservation={deleteReservation}
      />
    );
  });
  return <div className="cards-container">{cards}</div>;
};

export default CardsContainer;

CardsContainer.propTypes = {
  reservation: PropTypes.array,
  deleteReservation: PropTypes.func
};
