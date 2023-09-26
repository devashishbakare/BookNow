import { Homepage } from "./Components/Homepage";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <>
      <div className="h-[8vh] w-[100vw] min-h-[72px]">
        <Navbar />
      </div>
      <div className="h-auto w-[100vw]">
        <Homepage />
      </div>
    </>
  );
}

export default App;
