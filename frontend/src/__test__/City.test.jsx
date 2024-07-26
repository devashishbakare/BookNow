import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { City } from "../Components/City";
import { getHotelsFromCity } from "../utils/api";
import {
  BrowserRouter as Router,
  useNavigate,
  useParams,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("../utils/api", () => ({
  getHotelsFromCity: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("List of holtes by city", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("fetching list of hotels and rendering on screen", async () => {
    const user = userEvent.setup();
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useParams.mockReturnValue({ cityName: "Test City" });
    getHotelsFromCity.mockResolvedValue({
      success: true,
      data: [
        {
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
            "661e08da50e4a5aeee946958",
            "661e08da50e4a5aeee946959",
            "661e08da50e4a5aeee94695a",
          ],
          reviews: [
            "666540a9ff014482003dd800",
            "66654119ff014482003dd81f",
            "66654178ff014482003dd83e",
            "66778f00e1f352981bfc078d",
          ],
          host: "661a1dcb9df7eb5b426add8f",
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
      ],
    });

    act(() => {
      render(
        <Router>
          <City />
        </Router>
      );
    });

    const loader = screen.getByTestId("loader-testid");
    expect(loader).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByTestId("loader-testid")).not.toBeInTheDocument();
    });
    const hotelName = screen.getByText("Novotel Pune Viman Nagar Road");
    expect(hotelName).toBeInTheDocument();

    const hotelId = "661f6f36f25dc8cba19aefcc";
    const hotelDiv = screen.getByTestId(hotelId);

    await user.click(hotelDiv);
    expect(navigate).toHaveBeenCalledWith(`/hotel/${hotelId}`);
  });
});
