import { screen, render, act, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Profile } from "../Components/Profile";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  fetchUserDetails,
  fetchCurrentBooking,
  fetchHistory,
  fetchUserReviews,
} from "../utils/api";

jest.mock("../utils/api");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Profile component", () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);
  const mockUserDetails = {
    _id: "660ecabcc8fbdfba84d6e969",
    name: "John Doe",
    phoneNumber: "9876543211",
    email: "johndoe@gmail.com",
    password: "$2b$10$ku8aZFYX1uh2WAOx6WzykeZnpQ8cWCZl03wopNxfPgtiX71U3Plby",
    isAdmin: false,
    reviews: ["66778f00e1f352981bfc078d", "667e3e495b62880038ad523d"],
    bookingHistory: [
      "666a82a5d2625ea774db8fe1",
      "666a8318d2625ea774db9015",
      "666ae91c513353e507c15960",
      "666b180b4f4cb9212f73ddb5",
      "667a59d888fa31abd98b37f2",
    ],
    __v: 7,
  };
  const mockCurrentBooking = [
    {
      bookingDetails: {
        _id: "666a82a5d2625ea774db8fe1",
        bookingId: 37,
        name: "John Doe",
        email: "darknet311298@gmail.com",
        phoneNumber: "9876543211",
        additionalContactInformation: "No additional Information",
        hotelName: "Novotel Pune Viman Nagar Road",
        hotelId: "661f6f36f25dc8cba19aefcc",
        selectedDates: [
          {
            month: 6,
            dates: [27],
            _id: "666a82a5d2625ea774db8fe2",
          },
        ],
        totalAmount: "2999",
        paymentMethod: "Pay On Arrival",
        roomPackage: "661e08da50e4a5aeee946958",
        createdAt: "2024-06-13T05:24:53.727Z",
        updatedAt: "2024-06-13T05:24:53.727Z",
        __v: 0,
      },
      hotelImage:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
    },
  ];
  const mockPastBookings = [
    {
      bookingDetails: {
        _id: "666a82a5d2625ea774db8fe1",
        bookingId: 37,
        name: "John Doe",
        email: "darknet311298@gmail.com",
        phoneNumber: "9876543211",
        additionalContactInformation: "No additional Information",
        hotelName: "Novotel Pune Viman Nagar Road",
        hotelId: "661f6f36f25dc8cba19aefcc",
        selectedDates: [
          {
            month: 6,
            dates: [27],
            _id: "666a82a5d2625ea774db8fe2",
          },
        ],
        totalAmount: "2999",
        paymentMethod: "Pay On Arrival",
        roomPackage: "661e08da50e4a5aeee946958",
        createdAt: "2024-06-13T05:24:53.727Z",
        updatedAt: "2024-06-13T05:24:53.727Z",
        __v: 0,
      },
      hotelImage:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
    },
    {
      bookingDetails: {
        _id: "666a8318d2625ea774db9015",
        bookingId: 38,
        name: "John Doe",
        email: "darknet311298@gmail.com",
        phoneNumber: "9876543211",
        additionalContactInformation: "Nothing to add here",
        hotelName: "Hyatt Pune",
        hotelId: "661f6f4af25dc8cba19aefce",
        selectedDates: [
          {
            month: 6,
            dates: [29],
            _id: "666a8318d2625ea774db9016",
          },
        ],
        totalAmount: "2999",
        paymentMethod: "Online Payment",
        roomPackage: "661e08da50e4a5aeee946958",
        createdAt: "2024-06-13T05:26:48.544Z",
        updatedAt: "2024-06-13T05:26:48.544Z",
        __v: 0,
      },
      hotelImage:
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982628/iwfdouzkeq83yp45r3zh.jpg",
    },
  ];
  const mockUserReviews = [
    {
      _id: "66778f00e1f352981bfc078d",
      userId: "660ecabcc8fbdfba84d6e969",
      hotelId: "661f6f36f25dc8cba19aefcc",
      hotelName: "Novotel Pune Viman Nagar Road",
      userName: "john doe",
      rating: 4,
      reviewText:
        "this place exceeded all our expectations. The combination of luxurious accommodations, outstanding service, and excellent facilities makes it a top choice for anyone looking to indulge in a premium hotel experience.",
      date: "2024-06-23T03:26:09.371Z",
      createdAt: "2024-06-23T02:57:04.296Z",
      updatedAt: "2024-06-23T03:26:09.372Z",
      __v: 0,
    },
  ];

  beforeEach(() => {
    fetchUserDetails.mockResolvedValue({
      success: true,
      data: mockUserDetails,
    });
    fetchCurrentBooking.mockResolvedValue({
      success: true,
      data: mockCurrentBooking,
    });
    fetchHistory.mockResolvedValue({ success: true, data: mockPastBookings });
    fetchUserReviews.mockResolvedValue({
      success: true,
      data: mockUserReviews,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the loader initially", () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    expect(screen.getByTestId("loader-testid")).toBeInTheDocument();
  });
  it("Check contente after render", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/johndoe@gmail.com/i)).toBeInTheDocument();
  });

  it("check past booking details rendering", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    const user = userEvent.setup();
    const pastBookingButton = screen.getByTestId("pastBookingButton-testid");
    await user.click(pastBookingButton);
    expect(
      screen.getByText(/Novotel Pune Viman Nagar Road/i)
    ).toBeInTheDocument();
  });

  it("check current booking details rendering", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    const user = userEvent.setup();
    const currentBookingButton = screen.getByTestId(
      "currentBookingButton-testid"
    );
    await user.click(currentBookingButton);
    expect(
      screen.getByText(/Novotel Pune Viman Nagar Road/i)
    ).toBeInTheDocument();
  });

  it("check edit profile button click rendering form", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    const user = userEvent.setup();
    const editProfileButton = screen.getByTestId("editProfile-testid");
    await user.click(editProfileButton);
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
  });

  it("check review click test and rendering data", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });

    const user = userEvent.setup();
    const reviewButton = screen.getByTestId("reviewButton-testid");
    await user.click(reviewButton);
    expect(screen.getByText(/this place exceeded all/i)).toBeInTheDocument();
  });

  it("check logout functionality", async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });

    const user = userEvent.setup();
    const logoutButton = screen.getByTestId("logoutButton-testid");
    await user.click(logoutButton);
    expect(navigate).toHaveBeenCalled();
  });
});
