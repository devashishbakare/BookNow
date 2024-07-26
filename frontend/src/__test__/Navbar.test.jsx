import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { getSearchResult } from "../utils/api";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

jest.mock("../utils/api");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

describe("Homepage navigation test", () => {
  const mockSearchResult = [
    {
      id: "661f6f36f25dc8cba19aefcc",
      image:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
      hotelName: "Novotel Pune Viman Nagar Road",
    },
    {
      id: "661f6f4af25dc8cba19aefce",
      image:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
      hotelName: "Hyatt Pune",
    },
  ];
  const mockEmptyResult = [];

  beforeEach(() => {
    mockNavigate.mockReset();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("test component rendering", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navBarHeadingName = screen.getByTestId("navbarHeading-testid");
    fireEvent.click(navBarHeadingName);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("testing Navbar for success result", async () => {
    getSearchResult.mockResolvedValue({
      success: true,
      data: mockSearchResult,
    });
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // data-testid = "searchBar-testid"
    const searchBar = screen.getByTestId("searchBar-testid");
    const updateChange = {
      target: {
        value: "pune",
      },
    };
    act(() => {
      fireEvent.change(searchBar, updateChange);
    });
    expect(searchBar.value).toBe("pune");
    await waitFor(() => {
      expect(
        screen.getByText(/Novotel Pune Viman Nagar Road/i)
      ).toBeInTheDocument();
    });
  });
  it("testing Navbar for empty result", async () => {
    getSearchResult.mockResolvedValue({
      success: true,
      data: mockEmptyResult,
    });
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const searchBar = screen.getByTestId("searchBar-testid");
    const updateChange = {
      target: {
        value: "something different",
      },
    };
    act(() => {
      fireEvent.change(searchBar, updateChange);
    });
    expect(searchBar.value).toBe("something different");
    await waitFor(() => {
      expect(screen.getByText(/No Result found/i)).toBeInTheDocument();
    });
  });
});
