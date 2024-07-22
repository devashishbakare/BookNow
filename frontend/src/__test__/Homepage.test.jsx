import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "../Components/Homepage";
import React from "react";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

beforeEach(() => {
  mockNavigate.mockReset();
});

describe("Homepage navigation test", () => {
  test("city image click navigation test", () => {
    ``;
    render(
      <Router>
        <Homepage />
      </Router>
    );

    fireEvent.click(screen.getByAltText("newDelhi_small"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Delhi");

    fireEvent.click(screen.getByAltText("newDelhi_big"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Delhi");

    fireEvent.click(screen.getByAltText("Banglore_small"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Banglore");

    fireEvent.click(screen.getByAltText("Banglore_big"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Banglore");

    fireEvent.click(screen.getByAltText("Mumbai_small"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Mumbai");

    fireEvent.click(screen.getByAltText("Chennai_small"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Chennai");

    fireEvent.click(screen.getByAltText("Pune_small"));
    expect(mockNavigate).toHaveBeenCalledWith("/city/Pune");
  });
});
