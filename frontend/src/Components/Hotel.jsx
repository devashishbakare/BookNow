import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { Calendar } from "./Calendar";
import Slider from "react-slick";
import cities from "../assets/data/CitiesData";
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
  const reviewSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 500,
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  const date = new Date();
  const dates = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    availableDates: [1, 2, 3, 4, 5, 6, 7],
  };
  const data = cities[4].rooms[0];
  console.log("data" + data.reviews[0].name);
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  return (
    <>
      <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px] ">
        <Navbar />
      </div>
      <div className="h-[35vh] w-full">
        {/* <Slider {...settings}>
          {data.roomImages.map((image, index) => (
            <img
              src={image}
              alt="roomImage"
              className="h-[300px] w-full object-cover"
              key={index}
            />
          ))}
        </Slider> */}
        <img
          src={data.roomImages[0]}
          alt="roomImage"
          className="h-[300px] w-full object-cover"
        />
      </div>
      <div className="h-auto w-full flex flex-col centerDiv">
        <div className="h-auto min-h-[20vh] w-full flex flex-col p-1">
          <div className="addFont text-[20px] p-2 font-semibold">
            {data.name}
          </div>
          <div className="p-1 pl-2 ml-2">{data.roomInfo}</div>
          <div className="flex gap-2 p-1 pl-2 ml-2">
            <span className="flex gap-1">
              {data.rating}
              <MdStarRate className="text-[20px] text-[rgb(246,180,0)] " />
              hotel
            </span>

            <span className="underline">
              Reviews&nbsp;{data.reviews.length}
            </span>
          </div>
          <div className="flex gap-2 p-1 pl-1 ml-1">
            <MdOutlineLocationOn className="text-[35px]" />
            <span className="">{data.address}</span>
          </div>
        </div>
        <hr className="border-1 border-gray-400 w-[95%]" />
        <div className="h-auto w-full p-3 flex flex-col gap-2 ">
          <div className="addFont text-[20px] font-bold">Description</div>
          <span className="p-1">
            {!showMoreDesc ? data.description.slice(0, 150) : data.description}
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
              <span className="">Kitchen</span>
            </div>
            <div className="flex gap-2">
              <MdDirectionsCar className="text-[22px]" />
              <span className="">Free parking premises</span>
            </div>
            <div className="flex gap-2">
              <MdMonitor className="text-[22px]" />
              <span className="">TV</span>
            </div>
            <div className="flex gap-2">
              <MdOutlineBalcony className="text-[22px]" />
              <span className="">Patio or balcony</span>
            </div>
            <div className="flex gap-2">
              <MdOutlineAlarmOn className="text-[22px]" />
              <span className="">Carbon manoxide alarm</span>
            </div>
          </div>

          <div className="flex flex-col pl-4 gap-2 mt-3">
            <div className="flex gap-3">
              <MdTableRestaurant className="text-[22px]" />
              <span className="">Dedicated workspace</span>
            </div>
            <div className="flex gap-2">
              <MdPool className="text-[22px]" />
              <span className="">Private pool</span>
            </div>
            <div className="flex gap-2">
              <MdAcUnit className="text-[22px]" />
              <span className="">Air conditioning</span>
            </div>
            <div className="flex gap-2">
              <MdOutlineLuggage className="text-[22px]" />
              <span className="">Luggage drop-off allowed</span>
            </div>
            <div className="flex gap-2">
              <MdSmokingRooms className="text-[22px]" />
              <span className="">Smoke alarm</span>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-400 w-[95%] mt-2" />
        <div className="h-[auto] w-auto flex flex-col">
          <div className="h-[70px] w-[100vw] flex items-center addFont text-[20px] pl-[20px]">
            Available Dates for this vanue
          </div>
          <div className="h-full min-w-[350px] addBorder centerDiv">
            <Calendar
              year={dates.year}
              month={dates.month}
              availableDates={dates.availableDates}
            />
          </div>
        </div>
        <hr className="border-1 border-gray-400 w-[95%]" />
        <div className="h-auto w-[100vw] flex flex-col md:hidden">
          <div className="h-[70px] w-full flex items-center addFont text-[20px] pl-[20px] mb-1">
            Reviews
          </div>
          <div className="h-[300px] w-[100vw]">
            <Slider {...reviewSettings}>
              {data.reviews.map((reviewObject, index) => (
                <div
                  className="h-[300px] w-[100vw] shadow-lg flex flex-col"
                  key={data.name + "review" + index}
                >
                  <div className="h-[20%] w-full centerDiv">
                    <span className="h-full w-[60%] flex items-center pl-3 text-[1.1rem] font-bold addFont">
                      {reviewObject.name}
                    </span>
                    <span className="h-full w-[40%] centerDiv font-semibold addFont">
                      {reviewObject.date}
                    </span>
                  </div>
                  <div className="h-[80%] w-full flex flex-col">
                    <span className="h-auto w-full mt-1 mb-2 text-[15px] addFont font-thin p-3">
                      {reviewObject.review}
                    </span>
                    <span className="h-[20%] w-full flex gap-1 pl-3">
                      {Array.from(
                        { length: reviewObject.rating },
                        (_, index) => (
                          <span className="centerDiv">
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
        </div>
        <hr className="border-1 border-gray-400 w-[95%]" />
        <div className="h-auto w-[100vw] flex flex-col gap-2 pl-2">
          <div className="h-auto w-full flex flex-col gap-1 mt-2">
            <span className="h-auto w-full text-[1.2rem] addFont flex items-center p-2">
              Hosted By {data.hostedBy.name}
            </span>
            <span className="h-auto w-full text-[1.1rem] pl-2 addFont font-light">
              Joined in {data.hostedBy.joinDate}{" "}
            </span>
          </div>
          <div className="h-auto w-full flex flex-col">
            <div className="h-[40px] w-full flex gap-1 items-center">
              <MdOutlineStarPurple500 className="text-[1.7rem] ml-2" />
              <span className="text-[1rem] ml-2">
                {data.reviews.length} reviews
              </span>
            </div>
            <div className="h-[40px] w-full flex gap-1 items-center">
              <MdVerified className="text-[1.7rem] ml-2" />
              <span className="text-[1rem] ml-2">Identity Verify</span>
            </div>
          </div>
          <div className="h-auto w-[100vw] flex flex-col gap-3">
            <div className="h-auto w-full flex flex-col">
              <span className="p-2 text-[1rem] addFont">During your stay</span>
              <span className="pl-2 text-[1rem] ">
                I will be avaible to property sometimes at the property, but
                always available on calls and massege
              </span>
            </div>
            <div className="h-auto w-full flex flex-col gap-1">
              <span className="pl-2 text-[1.1rem]">Response rate : 100%</span>
              <span className="pl-2 text-[1rem] ">
                Response time : within hour
              </span>
              <span className="pl-2 text-[1rem] ">
                Contact Number : {data.hostedBy.contactNumber}
              </span>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-400 w-[95%] mt-2" />
        <div className="h-[40vh] w-full flex flex-col gap-3 pl-2 mt-2">
          <span className="h-auto w-full text-[1.2rem] addFont flex items-center p-2">
            Where you'll be
          </span>
          <iframe
            src={data.map}
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="h-full w-full">
          <Contact />
        </div>
      </div>
    </>
  );
};
