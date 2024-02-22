import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] flex justify-between items-center bg-[#003b95]">
        <div className="h-full w-[10%] min-w-[150px] centerDiv gap-2">
          <img
            className="h-[40px] w-[40px] rounded-[50%] object-cover"
            src="http://res.cloudinary.com/djgouef8q/image/upload/v1707109963/p8lfmwymj1fnxoddeaaa.png"
            alt="logoImage"
          />
          <span className="text-[#ffffff]">BookNow</span>
        </div>
        <div className="text-[#ffffff] mr-5">Sign-In</div>
      </div>
    </>
  );
};
