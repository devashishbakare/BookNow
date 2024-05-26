import propTypes from "prop-types";
export const BookingSummery = ({ bookingDetails, roomType }) => {
  const getMonthName = (monthNumber) => {
    const date = new Date(2000, monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };

  return (
    <>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Booking ID :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.bookingId}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Full Name :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.name}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Email :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.email}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Phone Number :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.phoneNumber}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Additional Info :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.additionalContactInformation}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Hotel Name
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.hotelName}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Date
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.selectedDates.map((month) => (
            <>
              {month.dates.map((date) => (
                <>
                  <span className="">{date}</span>
                </>
              ))}
              &nbsp;
              <span className="">{getMonthName(month.month)}</span>
              {", "}
              &nbsp;
            </>
          ))}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Room Package
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {roomType}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Payment Method
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.paymentMethod}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex">
        <div className="h-full w-[45%] flex centerDiv items-center text-[#003b95]">
          Amount :
        </div>
        <div className="h-full w-[60%] flex flex-row items-center pl-3">
          {bookingDetails.totalAmount}
        </div>
      </div>
      <div className="min-h-[45px] h-auto w-full flex centerDiv">
        <button className=" w-[80%] h-[60px] rounded-lg  text-black border-[1px] border-[#003b95] shadow-md">
          Explore More
        </button>
      </div>
    </>
  );
};
BookingSummery.propTypes = {
  bookingDetails: propTypes.object,
  roomType: propTypes.string,
};
