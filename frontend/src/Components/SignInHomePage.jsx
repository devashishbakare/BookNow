import React from "react";
import { SignInForm } from "./SignInForm";
export const SignInHomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] max-w[1150px] md:flex items-center justify-center">
        <div className="h-auto w-full flex flex-col gap-4 md:hidden">
          <div className="h-[300px] min-w-[370px] w-full centerDiv">
            <img
              src="http://res.cloudinary.com/djgouef8q/image/upload/v1707315678/eu3iahhd2jgvx1jdiuqx.png"
              alt="hotelImage"
              className="h-full w-full object-cover"
            />
            {/* <div className="h-full w-full addBorder bg-black">hellow</div> */}
          </div>
          <div className="h-[500px] w-full min-w-[370px] overflow-y-scroll">
            <SignInForm />
          </div>
        </div>
        <div className="hidden md:flex h-auto w-[767px] border-2 border-gray-400 baseColor">
          <div className="min-h-[500px] w-[50%]">
            <img
              src="http://res.cloudinary.com/djgouef8q/image/upload/v1707548707/jilrdxdgvnvtkobg0oew.jpg"
              alt="hotelImage"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-full w-[50%] min-w-[370px] centerDiv">
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  );
};
