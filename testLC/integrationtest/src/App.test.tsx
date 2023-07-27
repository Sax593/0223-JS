import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "./Card";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Cart", () => {
  it("renders a button", () => {
    render(<Cart />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  describe("When user clicks purchase button", () => {
    it("renders Thank you!", () => {
      render(<Cart />);

      fireEvent.click(screen.getByRole("button"));

      expect(screen.getByText(/Thank you!/i)).toBeInTheDocument();
    });
  });
});
