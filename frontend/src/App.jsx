import { Home } from "./Components/Home";
import { City } from "./Components/City";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hotel } from "./Components/Hotel";
import { SignInHomePage } from "./Components/SignInHomePage";
// import { UpdateImages } from "./Components/updateImages";
import { BookingConfirmation } from "./Components/BookingConfirmation";
// import { ProfilePage } from "./Components/ProfilePage";
import { ConfirmBooking } from "./Components/ConfirmBooking";
import { Profile } from "./Components/Profile";
import { BookingDetails } from "./Components/BookingDetails";
import { ResetPassword } from "./Components/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:cityName" element={<City />} />
          <Route path="/hotel/:hotelId" element={<Hotel />} />
          <Route path="/signIn" element={<SignInHomePage />} />
          {/* <Route path="/uploadImages" element={<UpdateImages />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookHotel/:hotelId" element={<ConfirmBooking />} />
          <Route
            path="/bookingDetails/:bookingId"
            element={<BookingDetails />}
          />
          <Route
            path="/bookingConfirmation"
            element={<BookingConfirmation />}
          />
          <Route
            path="/resetPassword/:resetPasswordToken"
            element={<ResetPassword />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
