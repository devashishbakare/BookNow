import React from "react";
import { SignInForm } from "./SignInForm";
export const SignInHomePage = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] max-w[1150px] centerDiv">
        <div className="h-full w-full flex flex-col gap-4 md:hidden">
          <div className="h-[30%] min-h-[200px] min-w-[370px] w-full centerDiv">
            <img
              src="http://res.cloudinary.com/djgouef8q/image/upload/v1707315678/eu3iahhd2jgvx1jdiuqx.png"
              alt="hotelImage"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[65%] w-full min-w-[370px] min-h-[500px]">
            <SignInForm />
          </div>
        </div>
        <div className="hidden md:flex h-[65%] w-[767px] border-2 border-gray-400 baseColor">
          <div className="h-full w-[50%]">
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
