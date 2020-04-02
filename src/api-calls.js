export const getData = () => {
  return fetch("http://localhost:3001/api/v1/reservations").then(response =>
    response.json()
  );
};

export const postNewReservation = reservation => {
  return fetch("http://localhost:3001/api/v1/reservations", {
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
  }).then(response => response.json());
};

export const deleteFromDatabase = id => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: "DELETE"
  }).then(response => response.json());
};
