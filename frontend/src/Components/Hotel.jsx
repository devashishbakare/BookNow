import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { Calendar } from "./Calendar";
import Slider from "react-slick";
import { sampleRoomPackage } from "../utils/constants";
import { getHotelDetails } from "../utils/api";
import { showErrorNotification } from "../utils/notification";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import Spinners from "../utils/Spinners";
import { ToastContainer } from "react-toastify";
import {
  MdStarRate,
  MdOutlineLocationOn,
  MdSoupKitchen,
  MdDirectionsCar,
  MdMonitor,
  MdOutlineBalcony,
  MdOutlineAlarmOn,
  MdTableRestaurant,
  MdPool,
  MdAcUnit,
  MdOutlineLuggage,
  MdSmokingRooms,
  MdOutlineStarPurple500,
  MdVerified,
} from "react-icons/md";

export const Hotel = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  const reviewSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 500,
  };

  const navigate = useNavigate();
  const [navigateData, setNavigateData] = useState();
  const { hotelId } = useParams();
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [userWidePackageSelection, setUserWidePackageSelection] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hotelDetails, setHotelDetails] = useState();
  const [roomPackageSelectionIndex, setRoomPackageSelectionIndex] = useState(0);

  const date = new Date();
  const dates = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  let monthName = new Date(dates.year, dates.month - 1).toLocaleString(
    "default",
    {
      month: "long",
    }
  );
  const [calanderDetails, setCalendarDetails] = useState({
    month: dates.month,
    monthName,
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchHotelData = async (id) => {
      const response = await getHotelDetails(id);
      if (response.success === true) {
        console.log("hotel data " + response.data);
        const data = {
          id: response.data._id,
          selectedDates: response.data.selectedDates,
          roomPackages: response.data.roomPackages,
        };
        setNavigateData(data);
        setUserWidePackageSelection(
          new Array(response.data.reviews.length).fill(false)
        );
        setHotelDetails(response.data);
      } else {
        showErrorNotification("something went wrong while date fetching");
      }
    };
    fetchHotelData(hotelId);
    setIsLoading(false);
  }, [hotelId]);

  const updateMonth = (requestFor) => {
    if (requestFor == "next") {
      let updatedDetails = { ...calanderDetails };
      updatedDetails.month = updatedDetails.month + 1;
      updatedDetails.monthName = new Date(
        dates.year,
        updatedDetails.month - 1
      ).toLocaleString("default", {
        month: "long",
      });
      setCalendarDetails(updatedDetails);
    } else {
      let updatedDetails = { ...calanderDetails };
      updatedDetails.month = updatedDetails.month - 1;
      updatedDetails.monthName = new Date(
        dates.year,
        updatedDetails.month - 1
      ).toLocaleString("default", {
        month: "long",
      });
      setCalendarDetails(updatedDetails);
    }
  };
  const [userMonthDateSelection, setUserMonthDateSelection] = useState({});
  const handleWidePackageSelection = (index) => {
    const prevSelection = { ...userWidePackageSelection };
    prevSelection[index] = !prevSelection[index];
    setUserWidePackageSelection(prevSelection);
  };

  const handleBookNow = () => {
    console.log(navigateData);
    navigate(`/bookHotel/${hotelId}`, { state: navigateData });
  };
  return (
    <>
      {isLoading ? (
        <Spinners />
      ) : (
        hotelDetails && (
          <div className="h-auto w-auto centerDiv flex flex-col">
            <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px] ">
              <Navbar />
            </div>

            <div className="h-auto w-[100vw] flex flex-col max-w-[1150px] shadow-lg">
              <div className="h-[35vh] w-full">
                <Slider {...settings}>
                  {hotelDetails.images.map((image, index) => (
                    <img
                      src={image}
                      alt="roomImage"
                      className="h-[300px] w-full object-cover"
                      key={index}
                    />
                  ))}
                </Slider>
                {/* <img
                  src={data.roomImages[0]}
                  alt="roomImage"
                  className="h-full w-full object-cover"
                /> */}
              </div>
              <div className="h-full w-full flex flex-col pt-[20px] md:flex-row">
                <div className="h-auto w-[100%] flex flex-col centerDiv md:w-[65%]">
                  <div className="h-auto min-h-[20vh] w-full flex flex-col p-3">
                    <div className="addFont text-[20px] p-2 font-semibold">
                      {hotelDetails.name}
                    </div>
                    <div className="flex gap-2 p-1 pl-2 ml-2">
                      <span className="flex gap-1">
                        {hotelDetails.rating}
                        <MdStarRate className="text-[20px] text-[rgb(246,180,0)] " />
                        hotel
                      </span>

                      <span className="underline">
                        Reviews&nbsp;{hotelDetails.reviews.length}
                      </span>
                    </div>
                    <div className="flex gap-2 p-1 pl-1 ml-1">
                      <MdOutlineLocationOn className="text-[35px]" />
                      <span className="">{hotelDetails.address}</span>
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 w-[95%]" />
                  <div className="h-auto w-full p-4 flex flex-col gap-2 ">
                    <div className="addFont text-[20px] font-bold">
                      Description
                    </div>
                    <span className="p-1">
                      {!showMoreDesc
                        ? hotelDetails.description.slice(0, 150)
                        : hotelDetails.description}
                      ...
                    </span>
                    <span
                      className="p-1 font-semibold underline"
                      onClick={() => setShowMoreDesc(!showMoreDesc)}
                    >
                      {!showMoreDesc ? "Show More..." : "Show Less..."}
                    </span>
                  </div>
                  <hr className="border-1 border-gray-400 w-[95%]" />
                  <div className="h-auto w-full flex flex-col p-1">
                    <div className="addFont text-[20px] mt-2 pl-3 mb-1">
                      What this place offers
                    </div>
                    <div className="flex flex-col pl-4 gap-3">
                      <div className="flex gap-2">
                        <MdSoupKitchen className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[0] ? "" : "line-through"
                          }`}
                        >
                          Kitchen
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdDirectionsCar className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[1] ? "" : "line-through"
                          }`}
                        >
                          Free parking premises
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdMonitor className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[2] ? "" : "line-through"
                          }`}
                        >
                          TV
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdOutlineBalcony className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[3] ? "" : "line-through"
                          }`}
                        >
                          Patio or balcony
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdOutlineAlarmOn className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[4] ? "" : "line-through"
                          }`}
                        >
                          Carbon manoxide alarm
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col pl-4 gap-2 mt-3">
                      <div className="flex gap-3">
                        <MdTableRestaurant className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[5] ? "" : "line-through"
                          }`}
                        >
                          Dedicated workspace
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdPool className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[6] ? "" : "line-through"
                          }`}
                        >
                          Private pool
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdAcUnit className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[7] ? "" : "line-through"
                          }`}
                        >
                          Air conditioning
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdOutlineLuggage className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[8] ? "" : "line-through"
                          }`}
                        >
                          Luggage drop-off allowed
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <MdSmokingRooms className="text-[22px]" />
                        <span
                          className={`${
                            hotelDetails.facilities[9] ? "" : "line-through"
                          }`}
                        >
                          Smoke alarm
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 w-[95%] mt-2" />
                  <div className="h-auto w-full flex flex-col">
                    <div className="h-auto w-full flex flex-col">
                      <div className="h-[35px] w-full items-center addFont text-[20px] pl-[20px]">
                        Available Dates for this vanue
                      </div>
                      <div className="h-[70px] w-[320px] flex ml-3 centerDiv border-2 border-gray-400">
                        {dates.month != calanderDetails.month && (
                          <span
                            onClick={() => updateMonth("prev")}
                            className="h-[40px] w-[40px] centerDiv addBorder rounded-[50%]"
                          >
                            <SlArrowLeft className="text-[1.4rem]" />
                          </span>
                        )}
                        <span className="h-full w-[60%] centerDiv addFont text-[20px] ml-4 mr-2">
                          {calanderDetails.monthName} {dates.year}
                        </span>
                        {calanderDetails.month != 12 && (
                          <span
                            onClick={() => updateMonth("next")}
                            className="h-[40px] w-[40px] centerDiv addBorder rounded-[50%]"
                          >
                            <SlArrowRight className="text-[1.4rem]" />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-full ml-[12px] w-[320px] p-2 mb-3 border-2 border-gray-400">
                      <Calendar
                        year={dates.year}
                        month={calanderDetails.month}
                        currentMonth={dates.month}
                        day={dates.day}
                        selectedDates={hotelDetails.selectedDates}
                        userMonthDateSelection={userMonthDateSelection}
                        setUserMonthDateSelection={setUserMonthDateSelection}
                      />
                    </div>
                  </div>

                  <hr className="border-1 border-gray-400 w-[95%]" />
                  <div className="h-auto w-full flex flex-col gap-2 pl-2">
                    <div className="h-auto w-full flex flex-col gap-1 mt-2">
                      <span className="h-auto w-full text-[1.2rem] addFont flex items-center p-2">
                        Hosted By {hotelDetails.host.name}
                      </span>
                      <span className="h-auto w-full text-[1.1rem] pl-2 addFont font-light">
                        Joined in {hotelDetails.host.joinDate.slice(0, 10)}{" "}
                      </span>
                    </div>
                    <div className="h-auto w-full flex flex-col">
                      <div className="h-[40px] w-full flex gap-1 items-center">
                        <MdOutlineStarPurple500 className="text-[1.7rem] ml-2" />
                        <span className="text-[1rem] ml-2">
                          {hotelDetails.reviews.length} reviews
                        </span>
                      </div>
                      <div className="h-[40px] w-full flex gap-1 items-center">
                        <MdVerified className="text-[1.7rem] ml-2" />
                        <span className="text-[1rem] ml-2">
                          Identity Verify
                        </span>
                      </div>
                    </div>
                    <div className="h-auto w-full flex flex-col gap-3">
                      <div className="h-auto w-full flex flex-col">
                        <span className="p-2 text-[1rem] addFont">
                          During your stay
                        </span>
                        <span className="pl-2 text-[1rem] ">
                          I will be avaible to property sometimes at the
                          property, but always available on calls and massege
                        </span>
                      </div>
                      <div className="h-auto w-full flex flex-col gap-1">
                        <span className="pl-2 text-[1.1rem]">
                          Response rate : 100%
                        </span>
                        <span className="pl-2 text-[1rem] ">
                          Response time : within hour
                        </span>
                        <span className="pl-2 text-[1rem]">
                          Contact Number : {hotelDetails.host.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="border-1 border-gray-400 w-[95%] mt-5" />
                  {hotelDetails.reviews.length > 0 && (
                    <>
                      <div className="h-[35vh] w-full">
                        <Slider {...reviewSettings}>
                          {hotelDetails &&
                            hotelDetails.reviews.map((reviewObject, index) => (
                              <div
                                className="h-[300px] w-full shadow-lg flex flex-col"
                                key={reviewObject.name + "review" + index}
                              >
                                <div className="h-[20%] w-full centerDiv">
                                  <span className="h-full w-[60%] flex items-center pl-3 text-[1.1rem] font-bold addFont">
                                    {reviewObject.userName}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv font-semibold addFont">
                                    {reviewObject.date.slice(0, 10)}
                                  </span>
                                </div>
                                <div className="h-[80%] w-full flex flex-col">
                                  <span className="h-auto w-full mt-1 mb-2 text-[15px] addFont font-thin p-3">
                                    {reviewObject.reviewText}
                                  </span>
                                  <span className="h-[20%] w-full flex gap-1 pl-3">
                                    {Array.from(
                                      { length: reviewObject.rating },
                                      (_, index) => (
                                        <span key={index} className="centerDiv">
                                          <MdOutlineStarPurple500 className="text-[1.4rem]" />
                                        </span>
                                      )
                                    )}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </Slider>
                      </div>
                      <hr className="border-1 border-gray-400 w-[95%] mt-5" />
                    </>
                  )}
                  {hotelDetails && (
                    <div className="h-[40vh] w-full flex flex-col gap-3 pl-2 mt-2">
                      <span className="h-auto w-full text-[1.2rem] addFont flex items-center p-2">
                        Where you will be
                      </span>
                      <iframe
                        src={hotelDetails.map}
                        className="h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                </div>
                {/* <hr className="border-1 border-gray-400 w-[95%] mt-5" /> */}
                <div className="h-auto w-full min-h-[300px] flex flex-col md:h-auto md:w-[35vw]">
                  <div className="h-auto w-full min-h[300px] flex flex-col p-3 md:hidden">
                    <div className="h-[50px] w-full text-[1.2rem] addFont ml-2 flex items-center">
                      Expore Hotel Packages
                    </div>
                    <div className="h-auto w-full flex flex-col">
                      <div className="h-[70px] w-full flex items-center gap-3 centerDiv">
                        {hotelDetails &&
                          hotelDetails.roomPackages.map(
                            (roomPackage, index) => (
                              <>
                                <span
                                  key={`${hotelDetails._id} + "-"+${roomPackage._id}`}
                                  onClick={() =>
                                    setRoomPackageSelectionIndex(index)
                                  }
                                  className={`h-[40px] w-[30%] mt-1 centerDiv pl-2 addFont rounded-md ${
                                    roomPackageSelectionIndex == index
                                      ? `bg-[#274195] text-white`
                                      : ""
                                  }`}
                                >
                                  {roomPackage.roomType}
                                </span>
                              </>
                            )
                          )}
                      </div>
                      <div className="h-auto w-full centerDiv">
                        <div className="h-auto w-[98%] flex flex-col centerDiv">
                          <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                            <span className="h-full w-[60%] font-semibold flex items-center">
                              Room Type :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {
                                sampleRoomPackage[roomPackageSelectionIndex]
                                  .roomType
                              }
                            </span>
                          </div>
                          <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                            <span className="font-semibold h-full w-[60%] flex items-center">
                              No Of People Alllowed :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {
                                sampleRoomPackage[roomPackageSelectionIndex]
                                  .numberOfPeopleAllowed
                              }
                            </span>
                          </div>
                          <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                            <span className="font-semibold h-full w-[60%] flex items-center">
                              Number Of Beds :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {
                                sampleRoomPackage[roomPackageSelectionIndex]
                                  .numberOfBeds
                              }
                            </span>
                          </div>
                          <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                            <span className="font-semibold h-full w-[60%] flex items-center">
                              Number Of Bathrooms :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {
                                sampleRoomPackage[roomPackageSelectionIndex]
                                  .numberOfBathrooms
                              }
                            </span>
                          </div>
                          <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                            <span className="font-semibold h-full w-[60%] flex items-center">
                              Meals Included :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {sampleRoomPackage[roomPackageSelectionIndex]
                                .mealsIncluded
                                ? "Yes"
                                : "No"}
                            </span>
                          </div>
                          <div className="h-[40px] w-[95%] flex items-center pl-3">
                            <span className="font-semibold h-full w-[60%] flex items-center">
                              Price :{" "}
                            </span>
                            <span className="h-full w-[40%] centerDiv">
                              {
                                sampleRoomPackage[roomPackageSelectionIndex]
                                  .price
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-auto w-full flex flex-col mt-4 p-3">
                        <div className="h-auto w-full addFont text-[1.2rem] pl-2 mt-2">
                          Confirm Your Booking Now
                        </div>
                        <div className="h-auto w-full mt-4 mb-4 addFont text-[1rem] pl-2">
                          Click below to book your{" "}
                          {
                            sampleRoomPackage[roomPackageSelectionIndex]
                              .roomType
                          }{" "}
                          Room
                        </div>
                        <button
                          onClick={() => handleBookNow()}
                          className="h-[50px] w-[150px] addFont ml-[3%] rounded-md bg-[#274195] text-white"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col h-[1200px] w-full items-center overflow-y-scroll">
                    <div className="h-[50px] w-full text-[1.2rem] addFont centerDiv mt-2">
                      Expore Hotel Packages
                    </div>
                    <div className="h-auto w-[90%] flex flex-col centerDiv">
                      {hotelDetails &&
                        hotelDetails.roomPackages.map((roomPackage, index) => (
                          <>
                            <div
                              onClick={() => handleWidePackageSelection(index)}
                              key={roomPackage._id}
                              className={`h-[70px] w-full flex border-2 border-gray-400 rounded-lg mt-4 ${
                                userWidePackageSelection[index]
                                  ? "bg-[#003b95] text-[white] border-none rounded-none"
                                  : ""
                              }`}
                            >
                              <span className="h-full w-[85%] centerDiv text-[1.1rem] addFont">
                                {roomPackage.roomType}
                              </span>
                              <span className="h-full w-[15%] centerDiv">
                                {userWidePackageSelection[index] ? (
                                  <FaSortUp className="text-[1.5rem]" />
                                ) : (
                                  <FaSortDown className="text-[1.5rem]" />
                                )}
                              </span>
                            </div>
                            {userWidePackageSelection[index] && (
                              <div className="h-auto w-full border-2 border-blue-600 flex flex-col items-center">
                                <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                  <span className="h-full w-[60%] font-semibold flex items-center">
                                    Room Type :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.roomType}
                                  </span>
                                </div>
                                <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                  <span className="font-semibold h-full w-[60%] flex items-center">
                                    No Of People Alllowed :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.numberOfPeopleAllowed}
                                  </span>
                                </div>
                                <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                  <span className="font-semibold h-full w-[60%] flex items-center">
                                    Number Of Beds :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.numberOfBeds}
                                  </span>
                                </div>
                                <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                  <span className="font-semibold h-full w-[60%] flex items-center">
                                    Number Of Bathrooms :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.numberOfBathrooms}
                                  </span>
                                </div>
                                <div className="h-[40px] w-[95%] flex items-center pl-3 border-b-[1px] border-black">
                                  <span className="font-semibold h-full w-[60%] flex items-center">
                                    Meals Included :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.mealsIncluded ? "Yes" : "No"}
                                  </span>
                                </div>
                                <div className="h-[40px] w-[95%] flex items-center pl-3">
                                  <span className="font-semibold h-full w-[60%] flex items-center">
                                    Price :{" "}
                                  </span>
                                  <span className="h-full w-[40%] centerDiv">
                                    {roomPackage.price}
                                  </span>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                    </div>
                    <hr className="border-1 border-gray-400 w-[95%] mt-5" />
                    <div className="h-auto w-full flex flex-col centerDiv mt-3 gap-[25px]">
                      <div className="h-auto w-[80%] addFont text-[1.1rem] centerDiv">
                        Confirm your booking now
                      </div>
                      <button
                        onClick={() => handleBookNow()}
                        className="h-[50px] w-[80%] addFont ml-[3%] rounded-md bg-[#274195] text-white"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-full">
              <Contact />
            </div>
          </div>
        )
      )}
      <ToastContainer />
    </>
  );
};
