import React from "react";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { HiMinusCircle } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
export const BookingDetails = () => {
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    const currentDate = `${year}-${month}-${day}`;
    setMinDate(currentDate);
  }, []);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [showSpecialRequestDropdown, setShowSpecialRequestDropdown] =
    useState(false);
  const [dropDownSelection, setDropdownSelection] = useState(
    new Array(3).fill(false)
  );
  const [paymentMenuIcon, setPaymentMenuIcon] = useState(true);
  const [isOnlinePayment, setIsOnlinePayment] = useState(false);

  const handleDropdownSelection = (event) => {
    let index = event.target.value;
    console.log(index);
    dropDownSelection[index] = !dropDownSelection[index];
    setDropdownSelection(dropDownSelection);
  };

  const handlePaymentChange = () => {
    setPaymentMenuIcon(!paymentMenuIcon);
    setIsOnlinePayment(!isOnlinePayment);
  };

  return (
    <>
      <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px]">
        <Navbar />
      </div>
      <div className="h-[7vh] w-[100vw] min-h-[64px] max-w-[1150px] flex items-center pl-5 addFont text-[1.2rem]">
        Booking Details
      </div>
      <form
        action=""
        className="flex flex-col gap-2 max-h-[780px] overflow-y-auto"
      >
        <div className="h-[60px] w-[100vw] flex flex-col gap-1 centerDiv">
          <div className="h-[90%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500">
            <input
              type="text"
              name="name"
              className="h-[85%] w-[90%] ml-2 outline-none baseColor placeHolder"
              placeholder="Full Name"
              //value={values.name}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="h-[60px] w-[100vw] flex flex-col gap-1 centerDiv">
          <div className="h-[90%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500">
            <input
              type="email"
              name="email"
              className="h-[85%] w-[90%] ml-2 outline-none baseColor placeHolder"
              placeholder="Email"
              //value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="h-[60px] w-[100vw] flex flex-col gap-1 centerDiv">
          <div className="h-[90%] w-[95%] flex items-center rounded-3xl border-[1px] border-gray-500">
            <input
              type="number"
              name="phone_Number"
              className="h-[85%] w-[90%] ml-2 outline-none baseColor placeHolder"
              placeholder="Phone Number"
              //value={values.phone_Number}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="h-auto w-auto centerDiv">
          <textarea
            name="additional_contact_information"
            rows="4"
            cols="45"
            className="rounded-lg border-[1px] border-gray-500 textAreaPlaceHolder outline-none overflow-x-hidden baseColor"
            placeholder="Additional Contact Information"
            //value={values.additional_contact_information}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        <div className="h-[5vh] w-full flex gap-4 items-center mt-2">
          <span className="h-auto w-[150px] ml-5 addFont text-[1.05rem] font-normal">
            Check In Dates
          </span>
          <input
            type="date"
            className="text-[1.1rem] baseColor font-light ml-2"
            min={minDate}
            //value={values.additional_contact_information}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        <div className="h-[5vh] w-full flex gap-4 items-center">
          <span className="ml-5 h-auto w-[150px] addFont text-[1.05rem] font-normal">
            Check Out Dates
          </span>
          <input
            type="date"
            className="text-[1.1rem] baseColor font-light ml-2"
            min={minDate}
            //value={values.additional_contact_information}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        <div className="h-auto w-full flex flex-col">
          <div className="h-[50px] w-full addFont text-[1.05rem] flex items-center pl-5">
            Number Of Guest
          </div>
          <div className="flex flex-col items-center pl-7 gap-3">
            <div className="h-[40px] w-full flex justify-between">
              <span className="h-full w-[150px] flex items-center text-[1rem] font-light">
                Adult
              </span>
              <span className="h-full w-[200px] mr-5 flex">
                <span className="h-full w-[50px] centerDiv border-[1px] border-gray-500 mr-3 rounded-md">
                  {adultCount}
                </span>
                <span className="h-full w-[100px] flex items-center gap-3">
                  <span
                    className="h-full w-[50%] centerDiv text-[1.6rem]"
                    onClick={() => setAdultCount(adultCount + 1)}
                  >
                    <FcPlus />
                  </span>
                  <span
                    className="h-full w-[50%] centerDiv text-[1.8rem] text-[red]"
                    onClick={
                      adultCount > 0
                        ? () => setAdultCount(adultCount - 1)
                        : null
                    }
                  >
                    <HiMinusCircle />
                  </span>
                </span>
              </span>
            </div>
            <div className="h-[40px] w-full flex justify-between">
              <span className="h-full w-[150px] flex items-center text-[1rem] font-light">
                Childern (Age &gt; 10)
              </span>
              <span className="h-full w-[200px] mr-5 flex">
                <span className="h-full w-[50px] centerDiv border-[1px] border-gray-500 mr-3 rounded-md">
                  {adultCount}
                </span>
                <span className="h-full w-[100px] flex items-center gap-2">
                  <span
                    className="h-full w-[50%] centerDiv text-[1.6rem]"
                    onClick={() => setAdultCount(adultCount + 1)}
                  >
                    <FcPlus />
                  </span>
                  <span
                    className="h-full w-[50%] centerDiv text-[1.8rem] text-[red]"
                    onClick={
                      adultCount > 0
                        ? () => setAdultCount(adultCount - 1)
                        : null
                    }
                  >
                    <HiMinusCircle />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="h-auto min-h-[72px] w-full mt-5 flex ml-2 flex-col overflow-visible">
            <div
              className="h-[50px] w-[90%] border-[1px] border-gray-500 bg-[#f9f8f8] ml-1 flex items-center"
              onClick={() =>
                setShowSpecialRequestDropdown(!showSpecialRequestDropdown)
              }
            >
              <span className="h-full w-[80%] ml-2 addFont flex items-center">
                Select any special request
              </span>
              <span className="h-full w-[20%] centerDiv">
                {showSpecialRequestDropdown ? (
                  <>
                    <MdKeyboardArrowUp className="text-[2rem] text-[blue]" />
                  </>
                ) : (
                  <>
                    <MdKeyboardArrowDown className="text-[2rem] text-[blue]" />
                  </>
                )}
              </span>
            </div>
            {showSpecialRequestDropdown == true ? (
              <>
                <div className="h-full w-[90%] flex flex-col ml-1 border-[1px] border-gray-500 bg-[#f9f8f8] z-50">
                  <div className="h-[40px] w-full flex items-center ml-2">
                    <input
                      className="h-[20px] w-[10%]"
                      type="checkbox"
                      value="0"
                      onChange={handleDropdownSelection}
                    />
                    <label className="h-full w-[90%] flex items-center ">
                      Breakfast
                    </label>
                  </div>
                  <div className="h-[40px] w-full flex items-center ml-2">
                    <input
                      className="h-[20px] w-[10%]"
                      type="checkbox"
                      value="1"
                      onChange={handleDropdownSelection}
                    />
                    <label className="h-full w-[90%] flex items-center ">
                      Parking
                    </label>
                  </div>
                  <div className="h-[40px] w-full flex items-center ml-2">
                    <input
                      className="h-[20px] w-[10%]"
                      type="checkbox"
                      value="2"
                      onChange={handleDropdownSelection}
                    />
                    <label className="h-full w-[90%] flex items-center ">
                      Airport Drop
                    </label>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </form>
      <div className="absolute bottom-0 h-[10vh] w-full centerDiv gap-2">
        <div className="h-[80%] w-[40%]  relative centerDiv border-[1px] border-gray-500 ml-1 rounded-md">
          <span
            className="h-full w-[80%]  centerDiv"
            onClick={() => setPaymentMenuIcon(!paymentMenuIcon)}
          >
            {isOnlinePayment == false ? (
              <>
                <span className="addFont"> Pay on Arrival</span>
              </>
            ) : (
              <>
                <span className="addFont text-center">Online Payment</span>
              </>
            )}
          </span>
          <span
            className="h-full w-[20%] centerDiv text-[1.8rem] text-[blue]"
            onClick={() => setPaymentMenuIcon(!paymentMenuIcon)}
          >
            {paymentMenuIcon ? (
              <>
                <MdKeyboardArrowUp />
              </>
            ) : (
              <>
                <MdKeyboardArrowDown />
              </>
            )}
          </span>
          {paymentMenuIcon == false ? (
            <>
              {" "}
              <div
                className="h-full w-full  absolute bottom-[100%] baseColor flex items-center centerDiv"
                onClick={handlePaymentChange}
              >
                {isOnlinePayment == false ? (
                  <>
                    <span className="addFont text-center">Online Payment</span>
                  </>
                ) : (
                  <>
                    <span className="addFont">Pay on Arrival</span>
                  </>
                )}
              </div>
            </>
          ) : null}
        </div>

        <div className="h-full w-[60%] flex items-center text-[white]">
          <div className="h-[80%] w-[95%] bg-[#003b95] rounded-md flex">
            <div className="h-full w-[50%] flex-col centerDiv">
              <div className="h-[60%] w-full centerDiv">
                <span className="">
                  <LuIndianRupee className="text-[1.3rem]" />
                </span>{" "}
                &nbsp;
                <span className="text-[1.2rem]">3740</span>
              </div>
            </div>
            <div className="h-full w-[50%] centerDiv">
              <span className="addFont text-center">Confirm Booking</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
