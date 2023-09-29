import React from "react";
import {
  tredingSmallImages,
  trendingBigImages,
} from "../assets/data/trendingData";
import { Contact } from "./Contact";
export const Homepage = () => {
  return (
    <>
      <div className="h-[25vh] min-h-[225px] w-[100vw] bg-[#FF385C] relative">
        <img
          src="https://www.linkpicture.com/q/beach_1.jpeg"
          alt="beachImage"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[70%] left-[2%] bottom-7 flex flex-col-reverse gap-3">
          <span className="font-gilroy-bold leading-[22.5px]">
            Search deals on hotes, home, and much more...
          </span>
          <span className="text-[40px] font-gilroy-bold font-bold leading-[22.5px] text-[#f8f8f8]">
            Find your next stay..
          </span>
        </div>
      </div>
      <div className="h-[9vh] w-[100vw] min-h-[81px] centerDiv gap-4 sm:gap-10">
        <span className=" centerDiv font-semibold">Country :</span>
        <span className=" centerDiv opacity-70">India</span>
        <span className=" centerDiv font-semibold">City</span>
        <input
          type="text"
          name=""
          className="h-[60%] min-w-[100px] bg-gray-200 pl-2 outline-none rounded-[15px] sm:w-[30%]"
          placeholder="search city here.."
        />
      </div>
      <div className="h-auto w-auto flex flex-col centerDiv">
        <div className="h-[9vh] min-h-[81px] w-[100vw] flex flex-col justify-center gap-1">
          <span className="ml-3 font-bold text-[20px] font-gilroy-bold leading-[22.5px] sm:text-[25px]">
            Trending Destinations
          </span>
          <span className="ml-3">
            Most popular choices for travellers from idea
          </span>
        </div>
        <div className="w-[100vw] centerDiv flex gap-3 flex-col sm:hidden">
          <div className="h-full w-full relative p-2">
            <img
              src={tredingSmallImages[0]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Delhi
            </span>
          </div>
          <div className="h-full w-full relative p-2">
            <img
              src={tredingSmallImages[1]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Banglore
            </span>
          </div>
        </div>
        <div className="hidden sm:flex sm:w-[100vw] sm:centerDiv sm:addBorder gap-3">
          <div className="h-full w-[50%] relative p-2">
            <img
              src={trendingBigImages[0]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Delhi
            </span>
          </div>
          <div className="h-full w-[50%] relative p-2">
            <img
              src={trendingBigImages[1]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00]">
              Banglore
            </span>
          </div>
        </div>
        <div className="w-[100vw] centerDiv gap-2 flex flex-col sm:flex-row">
          <div className="h-full w-full relative p-2">
            <img
              src={tredingSmallImages[2]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Mumbai
            </span>
          </div>
          <div className="h-full w-full relative p-2">
            <img
              src={tredingSmallImages[3]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Chennai
            </span>
          </div>
          <div className="h-full w-full relative p-2">
            <img
              src={tredingSmallImages[4]}
              alt="newDelhi"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <span className="absolute top-[12%] left-[5%] text-[40px] font-gilroy-bold font-semibold tracking-tighter leading-[22.5px] text-[#FFBF00] sm:text-[30px]">
              Pune
            </span>
          </div>
        </div>
      </div>
      <div className="h-auto w-auto">
        <Contact />
      </div>
    </>
  );
};
