import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { getData, postNewReservation } from "../../api-calls.js";
jest.mock("../../api-calls.js");

it("displays a new reservation when a user submits a reservation", async () => {
  postNewReservation.mockResolvedValueOnce({
    id: 18939837,
    name: "new test user",
    date: "4/11",
    time: "8:30",
    number: "100"
  });
  getData.mockResolvedValueOnce([
    {
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
    },
    {
      id: 2,
      name: "Leta",
      date: "4/5",
      time: "7:00",
      number: 2
    },
    {
      id: 3,
      name: "Pam",
      date: "1/21",
      time: "6:00",
      number: 4
    }
  ]);
  const { getByPlaceholderText, getByText } = render(<App />);
  const nameInput = getByPlaceholderText("Name");
  const dateInput = getByPlaceholderText("Date (mm/dd)");
  const timeInput = getByPlaceholderText("Time");
  const numberInput = getByPlaceholderText("Number of guests");
  const submitBtn = getByText("Make Reservation");
  fireEvent.change(nameInput, { target: { value: "new test user" } });
  fireEvent.change(dateInput, { target: { value: "4/11" } });
  fireEvent.change(timeInput, { target: { value: "8:30" } });
  fireEvent.change(numberInput, { target: { value: "100" } });
  fireEvent.click(submitBtn);
  const nameText = await waitFor(() => getByText("new test user"));
  const dateText = await waitFor(() => getByText("4/11"));
  const timeText = await waitFor(() => getByText("8:30"));
  const numberText = await waitFor(() => getByText("Number of guests: 100"));
  expect(nameText).toBeInTheDocument();
  expect(dateText).toBeInTheDocument();
  expect(timeText).toBeInTheDocument();
  expect(numberText).toBeInTheDocument();
});
