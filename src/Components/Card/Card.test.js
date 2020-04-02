import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

it("should display the expected text", () => {
  const { getByText } = render(
    <Card name="Ed" date="8/11" time="7:00" number="3" id="12345" key="12345" />
  );
  const name = getByText("Ed");
  const date = getByText("8/11");
  const time = getByText("7:00");
  const number = getByText("Number of guests: 3");
  expect(name).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(number).toBeInTheDocument();
});
