import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

it("should display the expected text", () => {
  const { getByPlaceholderText } = render(<Form />);
  const nameInput = getByPlaceholderText("Name");
  const dateInput = getByPlaceholderText("Date (mm/dd)");
  const timeInput = getByPlaceholderText("Time");
  const numberInput = getByPlaceholderText("Number of guests");
  expect(nameInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(numberInput).toBeInTheDocument();
});

it("should display input in form fields", () => {
  const { getByPlaceholderText, getByDisplayValue } = render(<Form />);
  const nameInput = getByPlaceholderText("Name");
  const dateInput = getByPlaceholderText("Date (mm/dd)");
  const timeInput = getByPlaceholderText("Time");
  const numberInput = getByPlaceholderText("Number of guests");
  fireEvent.change(nameInput, { target: { value: "Ed" } });
  fireEvent.change(dateInput, { target: { value: "4/11" } });
  fireEvent.change(timeInput, { target: { value: "8:30" } });
  fireEvent.change(numberInput, { target: { value: "4" } });
  const nameValue = getByDisplayValue("Ed");
  const dateValue = getByDisplayValue("4/11");
  const timeValue = getByDisplayValue("8:30");
  const numberValue = getByDisplayValue("4");
  expect(nameValue).toBeInTheDocument();
  expect(dateValue).toBeInTheDocument();
  expect(timeValue).toBeInTheDocument();
  expect(numberValue).toBeInTheDocument();
});
