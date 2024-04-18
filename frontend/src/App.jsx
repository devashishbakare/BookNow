import { Home } from "./Components/Home";
import { City } from "./Components/City";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hotel } from "./Components/Hotel";
import { Calendar } from "./Components/Calendar";
import { SignInHomePage } from "./Components/SignInHomePage";
import { UpdateImages } from "./Components/updateImages";
import { BookingDetails } from "./Components/BookingDetails";
import { BookingConfirmation } from "./Components/BookingConfirmation";
import { ProfilePage } from "./Components/ProfilePage";
function App() {
  const date = new Date();
  const dates = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    availableDates: [1, 2, 4, 6, 7],
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:cityName" element={<City />} />
          <Route path="/city/hotel" element={<Hotel />} />
          <Route path="/signIn" element={<SignInHomePage />} />
          <Route path="/uploadImages" element={<UpdateImages />} />
          <Route path="/bookingDetails" element={<BookingDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/bookingConfirmation"
            element={<BookingConfirmation />}
          />
          <Route
            path="/cal"
            element={
              <Calendar
                year={dates.year}
                month={dates.month}
                availableDates={dates.availableDates}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
