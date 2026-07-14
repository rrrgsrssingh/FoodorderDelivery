/** @jest-environment jsdom */


import {render,screen } from "@testing-library/react";
import Header from "../Header";

test("renders header with correct title", () => {
  render(<Header />);
  const titleElement = screen.getByText("My App");
  expect(titleElement).toBeInTheDocument();
});
