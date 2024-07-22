import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { screen, render, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { Hotel } from "../Components/Hotel";
import { getHotelDetails } from "../utils/api";

//getHotelDetails(id)
jest.mock("../utils/api", () => ({
  getHotelDetails: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("testing hotel information componentb", () => {
  const user = userEvent.setup();
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);
  useParams.mockReturnValue({ id: "661f6f36f25dc8cba19aefcc" });
  getHotelDetails.mockResolvedValue({
    success: true,
    data: {
      _id: "661f6f36f25dc8cba19aefcc",
      cityName: "Pune",
      backgroundImage: [
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712811618/pw6vbuwjriu8xvwyv9ou.jpg",
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712811618/pw6vbuwjriu8xvwyv9ou.jpg",
      ],
      name: "Novotel Pune Viman Nagar Road",
      images: [
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982563/lmlpyqw6yzsw6rs7tjja.jpg",
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982582/pbxdlly1aoywdoxkrtzu.jpg",
        "http://res.cloudinary.com/djgouef8q/image/upload/v1712982597/llag6zrf1kjvycag4mb8.jpg",
      ],
      address:
        "Weikfield IT City Infopark, Survey No. 30/3, Ramwadi, Viman Nagar, 411014 Pune, India –",
      description:
        "Featuring an open-air swimming pool, and a fitness centre. It is just an 8-minute drive from the Pune Airport and 850 meters from the Phoenix Market City. Free WiFi access is available. The property offers free parking. Shirdi is 3.5 hours away from the property.Air-conditioned rooms here will provide you with a flat-screen satellite TV and a seating area. It also has a minibar and tea/coffee maker. Featuring a shower, private bathrooms also come with free toiletries and slippers.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.333769742496!2d73.90823521165619!3d18.558985282469145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13f953dc837%3A0xb6782032b34e422e!2sNovotel%20Pune%20Nagar%20Road!5e0!3m2!1sen!2sin!4v1696000396867!5m2!1sen!2sin",
      facilities: [
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
      ],
      rating: 4,
      roomPackages: [
        {
          _id: "661e08da50e4a5aeee946958",
          roomType: "Standard",
          numberOfPeopleAllowed: 2,
          numberOfBeds: 1,
          numberOfBathrooms: 1,
          mealsIncluded: false,
          price: 2999,
          __v: 0,
        },
        {
          _id: "661e08da50e4a5aeee946959",
          roomType: "Deluxe",
          numberOfPeopleAllowed: 4,
          numberOfBeds: 2,
          numberOfBathrooms: 2,
          mealsIncluded: true,
          price: 6999,
          __v: 0,
        },
        {
          _id: "661e08da50e4a5aeee94695a",
          roomType: "Suite",
          numberOfPeopleAllowed: 6,
          numberOfBeds: 3,
          numberOfBathrooms: 3,
          mealsIncluded: true,
          price: 9999,
          __v: 0,
        },
      ],
      reviews: [
        {
          _id: "666540a9ff014482003dd800",
          userId: "60d0fe4f5311236168a807ca",
          hotelId: "661f6f36f25dc8cba19aefcc",
          userName: "Pranit Nadekar",
          rating: 5,
          reviewText: "This hotel was fantastic! Highly recommended.",
          date: "2024-05-01T10:00:00.000Z",
          createdAt: "2024-06-09T05:42:01.026Z",
          updatedAt: "2024-06-09T05:42:01.026Z",
          __v: 0,
        },
        {
          _id: "66654119ff014482003dd81f",
          userId: "60d0fe4f5311236168a109cc",
          hotelId: "661f6f36f25dc8cba19aefcc",
          userName: "Kalpesh Erande",
          rating: 4,
          reviewText:
            "Great service and comfortable stay, but the room was a bit small.",
          date: "2024-06-15T15:30:00.000Z",
          createdAt: "2024-06-09T05:43:53.806Z",
          updatedAt: "2024-06-09T05:43:53.806Z",
          __v: 0,
        },
        {
          _id: "66654178ff014482003dd83e",
          userId: "60d0fe4f5399236168a109ce",
          hotelId: "661f6f36f25dc8cba19aefcc",
          userName: "Chinmay Dhole",
          rating: 3,
          reviewText: "Average experience, the food was not up to the mark.",
          date: "2024-07-20T08:45:00.000Z",
          createdAt: "2024-06-09T05:45:28.943Z",
          updatedAt: "2024-06-09T05:45:28.943Z",
          __v: 0,
        },
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
      ],
      host: {
        _id: "661a1dcb9df7eb5b426add8f",
        name: "Mrutyunjay Bandawane",
        joinDate: "2024-04-13T12:00:00.000Z",
        phoneNumber: "9080706050",
        __v: 0,
      },
      selectedDates: [
        {
          month: 6,
          dates: [27, 13, 14],
          _id: "666a82a5d2625ea774db8fe7",
        },
      ],
      __v: 7,
      ratingScore: 16,
    },
  });

  test("test useEffect and redering of data to screen", async () => {
    const handleBookNow = jest.fn();
    act(() => {
      render(
        <Router>
          <Hotel />
        </Router>
      );
    });

    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    const hotelName = screen.getByText("Novotel Pune Viman Nagar Road");
    expect(hotelName).toBeInTheDocument();

    const desktopBookNowButton = screen.getByTestId("desktop-bookNow-button");
    await user.click(desktopBookNowButton);
    expect(navigate).toHaveBeenCalledTimes(1);
    const mobileBookNowButton = screen.getByTestId("mobile-bookNow-button");
    await user.click(mobileBookNowButton);
    expect(navigate).toHaveBeenCalledTimes(2);
  });
});
