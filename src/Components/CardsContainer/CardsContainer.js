import React from "react";
import "./CardsContainer.css";
import Card from "../Card/Card";

const CardsContainer = ({ reservations }) => {
  const cards = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
    );
  });
  return <div className="cards-container">{cards}</div>;
};

export default CardsContainer;
