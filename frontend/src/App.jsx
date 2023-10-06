import { Home } from "./Components/Home";
import { City } from "./Components/City";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hotel } from "./Components/Hotel";
import { Calendar } from "./Components/Calendar";
function App() {
  const dates = {
    year: 2023,
    month: 12,
    availableDates: [1, 2, 4, 6, 7],
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/city/hotel" element={<Hotel />} />
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
