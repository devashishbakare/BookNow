import React from "react";
import { Navbar } from "./Navbar";
import { Homepage } from "./Homepage";
export const Home = () => {
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
};
