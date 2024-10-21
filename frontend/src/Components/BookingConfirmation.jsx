import { Navbar } from "./Navbar";
import { BookingSummery } from "./BookingSummery";
import { useLocation } from "react-router-dom";
export const BookingConfirmation = () => {
  const location = useLocation();
  const sharedObject = location.state;
  const bookingDetails = sharedObject.data;
  const roomType = sharedObject.selectedPackage;
  return (
    <>
      <div className="flex centerDiv flex-col baseColor">
        <div className="h-[8vh] w-[100%] centerDiv max-w-[1150px] shadow-xl">
          <Navbar />
        </div>
        <div className="max-w-[1150px] w-[100vw] h-[92vh] flex shadow-xl">
          <div className="flex flex-col h-full w-full overflow-y-scroll md:w-[50%] md:flex md:items-center md:justify-center">
            <div className="h-auto w-full flex flex-col gap-3 pt-2 md:hidden">
              <BookingSummery
                bookingDetails={bookingDetails}
                roomType={roomType}
              />
            </div>
            <div className="hide rounded-lg md:flex flex-col justify-between h-[720px] w-[80%] bg-[#003b95] text-[#f8f8f8] lg:w-[65%]">
              <div className="mt-2 pl-5 pt-5 font-gilroy-bold text-[45px] tracking-tighter leading-[61.5px] text-left font-bold">
                BookNow
              </div>
              <div className="mb-6 pr-7 pb-5 font-gilroy-bold text-[45px] tracking-tight leading-[60.5px] text-right font-bold">
                Thank you for booking with us
              </div>
            </div>
          </div>
          <div className="hide md:flex h-full w-[50%] flex-col gap-3">
            <div className="min-h-[500px] h-auto w-full flex flex-col gap-3">
              <BookingSummery
                bookingDetails={bookingDetails}
                roomType={roomType}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
