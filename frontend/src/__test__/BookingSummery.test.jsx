import { screen, render, act } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BookingSummery } from "../Components/BookingSummery";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("testing on booking summary page", () => {
  test("check render jsx", async () => {
    const bookingDetails = {
      bookingId: "12345",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "9876543211",
      additionalContactInformation: "None",
      hotelName: "Hotel California",
      selectedDates: [
        {
          month: 6,
          dates: [12, 13, 14],
        },
      ],
      paymentMethod: "Credit Card",
      totalAmount: "500 USD",
    };

    const roomType = "Deluxe Suite";
    const user = userEvents.setup();
    act(() => {
      render(
        <Router>
          <BookingSummery bookingDetails={bookingDetails} roomType={roomType} />
        </Router>
      );
    });

    // checking whether a component is render or not
    expect(screen.getByText(/Booking ID :/i)).toBeInTheDocument();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
    // checking whether a button working or not
    const exploreMoreButton = screen.getByText(/Explore More/i);
    await user.click(exploreMoreButton);
    expect(mockNavigate).toHaveBeenCalledWith("/");

    const generatePdfButton = screen.getByText(/Generate PDF/i);
    expect(generatePdfButton).toBeInTheDocument();
  });
});
