import React from "react";
import { Navbar } from "./Navbar";
import { FcApproval } from "react-icons/fc";
import BookingDetailsData from "../assets/data/BookingDetailsData";
import { BookingSummery } from "./BookingSummery";
export const BookingConfirmation = () => {
  return (
    <>
      <div className="flex centerDiv flex-col baseColor">
        <div className="h-[8vh] w-[100%] centerDiv max-w-[1150px]">
          <Navbar />
        </div>
        <div className="max-w-[1150px] w-[100vw] h-[100%] flex md:flex md:items-center md:justify-center">
          <div className="flex flex-col h-full w-full overflow-y-scroll  md:w-[50%] md:flex md:items-center md:justify-center">
            <div className="h-[8vh]  min-h-[64px] w-full flex centerDiv addFont text-[1.2rem]">
              Your booking is confirmed{" "}
              <FcApproval className="ml-2 text-[1.8rem]" />
            </div>
            <div className="h-auto w-full pt-5 pb-5 pl-10 pr-10 centerDiv md:hidden">
              Thank you for booking with us here is your booking summery ...
            </div>
            <div className="hidden md:flex h-[5vh] w-full centerDiv mb-3">
              Thank you for booking with us
            </div>
            <div className="min-h-[500px] h-auto w-full flex flex-col gap-1 centerDiv md:hidden">
              <BookingSummery />
            </div>
            <div className="hidden md:flex h-[500px] w-[80%]">
              <img
                src="http://res.cloudinary.com/djgouef8q/image/upload/v1711367354/vnvwlp1kwlwyb2bpwxod.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[5vh] min-h-[50px] w-full centerDiv mt-3">
              <button className="mr-2 p-3 rounded-lg bg-[#003b95] text-white shadow-md">
                Explore More
              </button>
            </div>
          </div>
          <div className="hidden md:flex h-full w-[50%] flex-col">
            <div className="h-auto w-full min-h-[64px] flex centerDiv addFont text-[1.2rem]">
              Booking Summery
            </div>
            <div className="min-h-[500px] h-auto w-full flex flex-col gap-1 centerDiv">
              <BookingSummery />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
