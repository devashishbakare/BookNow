import React from "react";
import { Navbar } from "./Navbar";
import { TbBrandBooking } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import cities from "../assets/data/CitiesData";
export const ProfilePage = () => {
  const userName = "Abhishek Nadhe";
  const email = "abhisheknadhe@gmail.com";
  const data = cities[2].rooms[0];
  const bookingSummeryData = {
    cityName: "Mumbai",
    checkInDate: "12/03/2024",
    checkOutDate: "13/03/2024",
  };
  return (
    <>
      <div className="flex centerDiv flex-col baseColor">
        <div className="h-[8vh] w-[100vw] max-w-[1150px]">
          <Navbar />
        </div>
        <div className="h-auto w-[100vw] max-w-[1150px] flex justify-center gap-3 flex-col md:flex-row">
          <div className="flex flex-col items-center md:w-[35%]">
            <div className="h-[150px] w-[360px] flex flex-row centerDiv bg-[#1d232d] mt-2 rounded-lg shadow-sm md:w-[98%]">
              {" "}
              {/*cart*/}
              <div className="h-full w-[40%] centerDiv">
                <div className="h-[110px] w-[110px] rounded-[50%] centerDiv bg-white shadow-lg">
                  <span className="text-[3rem] font-bold">
                    {userName.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="h-full w-[60%] flex flex-col justify-center text-[#F5FEFD]">
                <div className="h-auto w-full ml-2 text-[1.2rem] font-bold m-2">
                  {userName}
                </div>
                <div className="h-[20%] w-full ml-2 md:text-[0.9rem] truncate">
                  {email}
                </div>
                <div className="h-[20%] w-full ml-2 underline text-blue-500 cursor-pointer">
                  edit profile
                </div>
              </div>
            </div>

            <div className="hidden">user info md to show</div>
          </div>
          <div className="h-[600px] w-full addBorder mt-2 md:w-[60%] md:h-[91vh] md:bg-[#fefcfc]">
            {/* Desktop Device*/}
            <div className="h-[70px] w-full flex centerDiv space-x-12 mt-2 md:space-x-6">
              {/*heading menu*/}
              <div className="h-full w-full centerDiv md:w-[25%] md:bg-[#ececec]">
                <div className="h-full w-[70px] centerDiv shadow-lg rounded-lg bg-[#e4e4e5] md:hidden">
                  <TbBrandBooking className="text-[1.9rem]" />
                </div>
                <div className="hidden rounded-lg shadow-sm  md:flex md:h-full md:w-full md:items-center md:justify-center md:gap-2">
                  <TbBrandBooking className="text-[1.9rem]" /> My Booking
                </div>
              </div>
              <div className="h-full w-full centerDiv md:w-[25%] md:bg-[#ececec]">
                <div className="h-full w-[70px] centerDiv shadow-lg rounded-lg bg-[#e4e4e5] md:hidden">
                  <FaHistory className="text-[1.6rem]" />
                </div>
                <div className="hidden rounded-lg shadow-sm md:flex md:h-full md:w-full md:items-center md:justify-center md:gap-2">
                  <FaHistory className="text-[1.6rem]" />
                  History
                </div>
              </div>
              <div className="h-full w-full centerDiv md:w-[25%] md:bg-[#ececec]">
                <div className="h-full w-[70px] centerDiv shadow-lg rounded-lg bg-[#e4e4e5] md:hidden">
                  <MdOutlineRateReview className="text-[1.9rem]" />
                </div>
                <div className="hidden rounded-lg shadow-sm md:flex md:h-full md:w-full md:items-center md:justify-center md:gap-2">
                  <MdOutlineRateReview className="text-[1.9rem]" />
                  Reviews
                </div>
              </div>
            </div>
            <div className="h-auto w-[100%] centerDiv mt-2 overflow-x-scroll">
              {/*one cart out of manny*/}
              <div className="h-[150px] w-[95%] border-[1px] border-gray-500 flex flex-col mt-3 sm:w-[70%] md:w-[82%]">
                <div className="h-[50px] w-full flex justify-between ">
                  <span className="h-full w-[70%] flex items-center ml-2 truncate addFont">
                    {data.name}
                  </span>
                  <span className="h-full w-[30%] mr-2 centerDiv underline theamColor">
                    Show Details
                  </span>
                </div>
                <div className="h-[100px] w-full flex flex-row">
                  <div className="h-full w-[120px] centerDiv">
                    <img
                      className="h-[90px] w-[90px] rounded-[10%] object-cover"
                      src={data.roomImages[0]}
                      alt="hotel Image"
                    />
                  </div>
                  <div className="h-full w-[70%] flex flex-col centerDiv gap-[3px]">
                    <div className="h-auto w-full flex">
                      <div className="w-[50%] flex pr-1 font-medium">
                        City :
                      </div>
                      <div className="">{bookingSummeryData.cityName}</div>
                    </div>
                    <div className="h-auto w-full flex">
                      <div className="w-[50%] flex pr-1 font-medium">
                        Check In Date :
                      </div>
                      <div className="">{bookingSummeryData.checkInDate}</div>
                    </div>
                    <div className="h-auto w-full flex">
                      <div className="w-[50%] flex pr-1 font-medium">
                        Check Out Date :
                      </div>
                      <div className="">{bookingSummeryData.checkInDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
