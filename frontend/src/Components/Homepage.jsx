import React from "react";

export const Homepage = () => {
  return (
    <>
      <div className="h-[25vh] min-h-[225px] w-[100vw] bg-[#FF385C] relative">
        <img
          src="https://www.linkpicture.com/q/beach_1.jpeg"
          alt="beachImage"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[70%] left-[2%] bottom-7 flex flex-col-reverse gap-3">
          <span className="font-gilroy-bold  tracking-tighter leading-[22.5px]">
            Search deals on hotes, home, and much more...
          </span>
          <span className="text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#f8f8f8]">
            find your next stay..
          </span>
        </div>
      </div>
      <div className="h-[9vh] w-[100vw] min-h-[81px] addBorder centerDiv"></div>
    </>
  );
};
