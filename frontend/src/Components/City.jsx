import { useState } from "react";
import cities from "../assets/data/CitiesData";
import { Navbar } from "./Navbar";
import { MdDateRange, MdLocationOn, MdTune, MdClose } from "react-icons/md";
export const City = () => {
  const data = cities[0];
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="h-auto w-[100vw] centerDiv flex-col">
        <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px]">
          <Navbar />
        </div>
        <div
          className={
            showFilter
              ? "h-[100vh] w-[75vw] z-10 bg-white fixed left-0 top-[70px] ease-in-out duration-500 flex flex-col gap-8 pt-5 md:w-[40vw]"
              : "fixed left-[-100%]"
          }
        >
          <div className="h-[50px] w-full ml-3 flex justify-between items-center">
            <span className=" addFont font-bold text-[25px]">Filters</span>
            <div className="mr-10">
              <MdClose
                className="text-[30px]"
                onClick={() => setShowFilter(false)}
              />
            </div>
          </div>

          <span className="h-[30px] w-full ml-3 addFont font-semibold text-[19px]">
            Price
          </span>
          <div className="flex flex-col gap-6">
            <label className="flex gap-2 ml-5 text-[17px]">
              <input type="checkbox" name="filterOption1" value="option1" />
              highest to lowest
            </label>
            <label className="flex gap-2 ml-5 text-[17px]">
              <input type="checkbox" name="filterOption2" value="option2" />
              lowest to highest
            </label>
          </div>
          <span className="h-[30px] w-full ml-3 addFont font-semibold text-[19px]">
            Sort
          </span>
          <div className="flex flex-col gap-6">
            <label className="flex gap-2 ml-5 text-[17px]">
              <input type="checkbox" name="filterOption1" value="option1" />
              highest rating to lowest
            </label>
            <label className="flex gap-2 ml-5 text-[17px]">
              <input type="checkbox" name="filterOption2" value="option2" />
              highest review to lowest
            </label>
          </div>
        </div>
        <div className="h-[25vh] min-h-[225px] max-w-[1150px] w-[100vw] relative md:h-[30vh] ">
          <img
            src={data.backgroundImage}
            alt="CityImage"
            className="h-full w-full object-cover max-w-[1150px]"
          />
          <div className="absolute top-3 left-4 md:left-10">
            <MdTune
              className="text-[30px] cursor-pointer text-white md:text-[40px] lg:hidden"
              onClick={() => setShowFilter(true)}
            />
          </div>
          <span className="absolute bottom-4 left-4 text-[45px] font-extrabold text-[rgb(246,180,0)] md:text-[55px] md:left-8">
            {data.cityName}
          </span>
        </div>
        {/* this is for larger screen */}
        <div className="h-auto w-[100vw] flex gap-1 max-w-[1150px]">
          <div className="hidden lg:flex lg:h-[63vh] lg:w-[25vw] lg:flex-col lg:gap-6 shadow-xl">
            <div className="h-[50px] w-full ml-3  pt-3 flex justify-between items-center">
              <span className=" addFont font-bold text-[25px]">Filters</span>
            </div>

            <span className="h-[30px] w-full ml-3 addFont font-semibold text-[19px]">
              Price
            </span>
            <div className="flex flex-col gap-6">
              <label className="flex gap-2 ml-5 text-[17px]">
                <input type="checkbox" name="filterOption1" value="option1" />
                highest to lowest
              </label>
              <label className="flex gap-2 ml-5 text-[17px]">
                <input type="checkbox" name="filterOption2" value="option2" />
                lowest to highest
              </label>
            </div>
            <span className="h-[30px] w-full ml-3 addFont font-semibold text-[19px]">
              Sort
            </span>
            <div className="flex flex-col gap-6">
              <label className="flex gap-2 ml-5 text-[17px]">
                <input type="checkbox" name="filterOption1" value="option1" />
                highest rating to lowest
              </label>
              <label className="flex gap-2 ml-5 text-[17px]">
                <input type="checkbox" name="filterOption2" value="option2" />
                highest review to lowest
              </label>
            </div>
          </div>
          <div className="h-auto w-[100vw] centerDiv flex-col lg:w-[70vw] lg:justify-normal">
            {data.rooms.map((room, index) => (
              <>
                <div
                  key={data.id + "-" + index}
                  className="h-auto w-[80%] max-w-[350px] shadow-lg rounded-[20px] p-3 flex flex-col mt-3 md:flex-row md:max-w-[750px]"
                >
                  <img
                    src={room.roomImages[0]}
                    alt="RoomImage"
                    className="h-[180px] w-full object-cover md:w-[35%] md:h-[220px]"
                  />
                  <div className="h-auto w-full flex flex-col gap-2 md:w-[65%]">
                    <div className="h-auto p-2 min-h-[40px] w-full flex justify-between mt-2">
                      <span className="flex items-center pl-2 addFont text-[18px] font-bold">
                        {room.name}
                      </span>
                      <span className="flex pr-2 addFont">
                        <span className="font-semibold addFont">Rating</span>
                        &nbsp;&nbsp;
                        {room.rating}
                      </span>
                    </div>
                    <div className="h-[40px] w-full flex pl-2 gap-3 items-center md:pl-5">
                      <span className="addFont font-bold">Available Dates</span>
                      <MdDateRange className="text-[20px]" />
                    </div>
                    <div className="h-auto w-full flex gap-[2px] md:ml-2">
                      <div className="h-auto w-[40px]">
                        <MdLocationOn className="text-[35px]" />
                      </div>
                      <div className="h-auto w-auto">
                        <span className=""> {room.address}</span>
                      </div>
                    </div>
                    <div className="h-auto w-full flex gap-2">
                      <span className="addFont pl-3 font-bold md:pl-5">
                        Price :
                      </span>
                      {room.price}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
