import { Navbar } from "./Navbar";
import { Homepage } from "./Homepage";
export const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col centerDiv">
        <div className="h-[8vh] w-full min-h-[72px] max-w-[1235px]">
          <Navbar />
        </div>
        <div className="h-[92vh] w-full overflow-y-scroll max-w-[1235px] shadow-lg">
          <Homepage />
        </div>
      </div>
    </>
  );
};
