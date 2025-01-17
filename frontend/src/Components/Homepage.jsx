import React from "react";
import {
  tredingSmallImages,
  trendingBigImages,
} from "../assets/data/trendingData";
import { useNavigate } from "react-router-dom";
import { Contact } from "./Contact";
export const Homepage = () => {
  const navigate = useNavigate();
  const navigateToCity = (cityName) => {
    navigate(`/city/${cityName}`);
  };

  return (
    <>
      <div className="h-[35vh] min-h-[315px] w-full bg-[#FF385C] relative">
        <img
          src="http://res.cloudinary.com/djgouef8q/image/upload/v1712815309/mgibmpwdltrbe0ejjoz2.png"
          alt="homePageImage"
          className="hide lg:flex h-full w-full object-fill"
        />
        <img
          src="http://res.cloudinary.com/djgouef8q/image/upload/v1712816160/y4inyymhzk8exr6p3phu.jpg"
          alt="homePageImage"
          className="h-full w-full object-cover lg:hidden"
        />
        <div className="absolute top-[8%] left-[2%] flex flex-col-reverse gap-3">
          <span className=" text-[15px] font-gilroy-bold leading-[22.5px]">
            Search deals on hotes, home, and much more...
          </span>
          <span className="text-[30px] font-gilroy-bold font-bold leading-[22.5px]">
            Find your next stay..
          </span>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col centerDiv overflow-y-scroll">
        <div className="h-[9vh] min-h-[81px] w-full flex flex-col justify-center gap-1">
          <span className="ml-3 font-bold text-[20px] font-gilroy-bold leading-[22.5px] sm:text-[25px]">
            Trending Destinations
          </span>
          <span className="ml-3">
            Most popular choices for travellers from idea
          </span>
        </div>
        <div className="w-[100vw] centerDiv flex gap-3 flex-col sm:hidden">
          <div
            onClick={() => navigateToCity("Delhi")}
            className="h-full w-full relative p-2 cursor-pointer"
          >
            <img
              src={tredingSmallImages[0]}
              alt="newDelhi_small"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Delhi
            </span>
          </div>
          <div
            onClick={() => navigateToCity("Banglore")}
            className="h-full w-full relative p-2 cursor-pointer"
          >
            <img
              src={tredingSmallImages[1]}
              alt="Banglore_small"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Banglore
            </span>
          </div>
        </div>
        <div className="hide sm:flex sm:w-full sm:centerDiv sm:addBorder gap-3">
          <div
            onClick={() => navigateToCity("Delhi")}
            className="h-full w-[50%] relative p-2 cursor-pointer"
          >
            <img
              src={trendingBigImages[0]}
              alt="newDelhi_big"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Delhi
            </span>
          </div>
          <div
            onClick={() => navigateToCity("Banglore")}
            className="h-full w-[50%] relative p-2 cursor-pointer"
          >
            <img
              src={trendingBigImages[1]}
              alt="Banglore_big"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Banglore
            </span>
          </div>
        </div>
        <div className="w-full centerDiv gap-2 flex flex-col sm:flex-row sm:h-[35vh] md:h-[40vh]">
          <div
            onClick={() => navigateToCity("Mumbai")}
            className="h-full w-full relative p-2 cursor-pointer"
          >
            <img
              src={tredingSmallImages[2]}
              alt="Mumbai_small"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Mumbai
            </span>
          </div>
          <div
            onClick={() => navigateToCity("Chennai")}
            className="h-full w-full relative p-2 cursor-pointer"
          >
            <img
              src={tredingSmallImages[3]}
              alt="Chennai_small"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Chennai
            </span>
          </div>
          <div
            onClick={() => navigateToCity("Pune")}
            className="h-full w-full relative p-2 cursor-pointer"
          >
            <img
              src={tredingSmallImages[4]}
              alt="Pune_small"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Pune
            </span>
          </div>
        </div>
      </div>
      <div className="h-auto w-auto mt-10">
        <Contact />
      </div>
    </>
  );
};
