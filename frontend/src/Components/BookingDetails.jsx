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
      <div className="h-[100vh] w-[100vw] centerDiv flex-col">
        <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px]">
          <Navbar />
        </div>
        <div className="h-auto w-full flex centerDiv gap-3 addBorder max-w-[1150px]">
          <div className="h-full w-[100vw] flex flex-col md:w-[63%]">
            <div className="h-[7vh] w-full min-h-[64px] pl-2 addFont text-[1.2rem] flex items-center max-w-[1150px]">
              Booking Details
            </div>
            <form
              action=""
              className="w-full flex flex-col gap-2 h-[71vh] max-h-[650px] overflow-y-auto md:h-full md:max-h-[680px]"
            >
              <div className="min-h-[60px] w-full flex flex-col gap-1 centerDiv">
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
              <div className="min-h-[60px] w-full flex flex-col gap-1 centerDiv">
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
              <div className="min-h-[60px] w-full flex flex-col gap-1 centerDiv">
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
              <div className="h-auto w-auto ml-4">
                <textarea
                  name="additional_contact_information"
                  rows="4"
                  cols="45"
                  className="rounded-lg border-[1px] border-gray-500 textAreaPlaceHolder outline-none overflow-x-hidden baseColor p-3 w-[96%]"
                  placeholder="Additional Contact Information"
                  //value={values.additional_contact_information}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
              </div>
              <div className="min-h-[5vh] w-full flex gap-4 items-center mt-2">
                <span className="h-full w-[22%] min-w-[150px] ml-5 addFont text-[1.05rem] font-normal flex items-center">
                  Check In Dates
                </span>
                <div className="h-full w-[70%] flex flex-row-reverse pr-11">
                  <input
                    type="date"
                    className="text-[1.1rem] baseColor font-light ml-2"
                    min={minDate}
                    //value={values.additional_contact_information}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="min-h-[5vh] w-full flex gap-4 items-center">
                <span className="h-full w-[22%] min-w-[150px] ml-5 addFont text-[1.05rem] font-normal flex items-center">
                  Check Out Dates
                </span>
                <div className="h-full w-[70%] flex flex-row-reverse pr-11">
                  <input
                    type="date"
                    className="text-[1.1rem] baseColor font-light ml-2"
                    min={minDate}
                    //value={values.additional_contact_information}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="h-auto w-full flex flex-col">
                <div className="h-[50px] w-full addFont text-[1.05rem] flex items-center pl-5">
                  Number Of Guest
                </div>
                <div className="flex flex-col items-center pl-7 gap-3">
                  <div className="h-[40px] w-full flex justify-between">
                    <span className="h-full min-w-[150px] flex items-center text-[1rem] font-light">
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
                    <span className="h-full min-w-[150px] flex items-center text-[1rem] font-light">
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
                    className="h-[50px] w-[95%] border-[1px] border-gray-500 bg-[#f9f8f8] ml-1 flex items-center"
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
                      <div className="h-full w-[95%] flex flex-col ml-1 border-[1px] border-gray-500 bg-[#f9f8f8] z-50">
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
          </div>
          <div className="hidden md:flex h-[89vh] w-[32vw] justify-center ">
            <div className="h-[350px] w-[300px] flex flex-col items-center">
              <div className="h-[60px] w-full flex items-center pl-2 addFont text-[1.2rem]">
                Booking Price
              </div>
              <div className="h-[60px] w-full flex">
                <span className="h-full w-[40%] pl-2 flex items-center">
                  Subtotal
                </span>
                <span className="h-full w-[60%] flex flex-row-reverse pr-3 items-center">
                  <LuIndianRupee className="text-[1.3rem]" /> &nbsp;{" "}
                  <span className="text-[1.14rem]">8790</span>
                </span>
              </div>
              <div className="h-[60px] w-full flex">
                <span className="h-full w-[40%] pl-2 flex items-center">
                  Extra Charges
                </span>
                <span className="h-full w-[60%] flex flex-row-reverse pr-3 items-center">
                  <LuIndianRupee className="text-[1.3rem]" /> &nbsp;{" "}
                  <span className="text-[1.14rem]">0.00</span>
                </span>
              </div>
              <div className="h-[60px] w-full flex border-t-[1px]  border-b-[1px] border-gray-500 mt-3">
                <span className="h-full w-[40%] pl-2 flex items-center">
                  Total
                </span>
                <span className="h-full w-[60%] flex flex-row-reverse pr-3 items-center">
                  <LuIndianRupee className="text-[1.3rem]" /> &nbsp;{" "}
                  <span className="text-[1.14rem]">8790</span>
                </span>
              </div>
              <div className="h-[60px] w-[90%] mt-5 rounded-3xl centerDiv  bg-[#003b95] text-white">
                Confirm Booking
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-2 h-[10vh] w-full centerDiv gap-2 baseColor md:hidden">
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
                      <span className="addFont text-center">
                        Online Payment
                      </span>
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
      </div>
    </>
  );
};
