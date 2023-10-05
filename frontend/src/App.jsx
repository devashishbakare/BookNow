import { Home } from "./Components/Home";
import { City } from "./Components/City";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
