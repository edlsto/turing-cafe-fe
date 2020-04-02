import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("displays a new reservation when a user submits a reservation", () => {
  const { getByPlaceholderText, getByText, debug } = render(<App />);
  const nameInput = getByPlaceholderText("Name");
  const dateInput = getByPlaceholderText("Date (mm/dd)");
  const timeInput = getByPlaceholderText("Time");
  const numberInput = getByPlaceholderText("Number of guests");
  const submitBtn = getByText("Make Reservation");
  fireEvent.change(nameInput, { target: { value: "Ed" } });
  fireEvent.change(dateInput, { target: { value: "4/11" } });
  fireEvent.change(timeInput, { target: { value: "8:30" } });
  fireEvent.change(numberInput, { target: { value: "4" } });
  fireEvent.click(submitBtn);
  expect(getByText("Ed")).toBeInTheDocument();
  expect(getByText("4/11")).toBeInTheDocument();
  expect(getByText("8:30")).toBeInTheDocument();
  expect(getByText("Number of guests: 4")).toBeInTheDocument();
});
