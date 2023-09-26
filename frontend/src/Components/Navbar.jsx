import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] flex justify-between items-center bg-[#FF385C]">
        <div className="h-full w-[10%] min-w-[150px] centerDiv gap-2">
          <img
            className="h-[40px] w-[40px] rounded-[50%] object-cover"
            src="https://www.linkpicture.com/q/Screenshot-2023-09-26-at-2.54.58-PM.jpg"
            alt="logoImage"
          />
          <span className="text-[#ffffff]">BookNow</span>
        </div>
        <div className="text-[#ffffff] mr-5">Sign-In</div>
      </div>
    </>
  );
};
