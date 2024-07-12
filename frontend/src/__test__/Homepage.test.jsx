import { render, screen } from "@testing-library/react";
import React from "react";
import { Homepage } from "../Components/Homepage";
import { MemoryRouter } from "react-router-dom";

test("Testing homepage", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Find your next stay../i);
  expect(linkElement).toBeInTheDocument();
});
