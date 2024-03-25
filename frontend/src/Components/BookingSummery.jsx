import React from "react";
import BookingDetailsData from "../assets/data/BookingDetailsData";
export const BookingSummery = () => {
  return (
    <>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Booking ID :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.bookingId}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Full Name :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.fullName}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Email :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.email}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Phone Number :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.phoneNumber}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Additional Info :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.additonContactInformation}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Check In Date :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.checkInDate}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Check Out Date :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.checkOutDate}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          No Of Adult :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.numberOfAdults}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          No Of Childern :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.numberOfChildren}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex flex-row-reverse items-center text-[#003b95]">
          Total Price :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {BookingDetailsData.totalPrice}
        </div>
      </div>
    </>
  );
};
