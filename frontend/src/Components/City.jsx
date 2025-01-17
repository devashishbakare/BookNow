import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MdDateRange, MdLocationOn, MdTune, MdClose } from "react-icons/md";
import Spinners from "../utils/Spinners";
import { getHotelsFromCity } from "../utils/api";
import { showErrorNotification } from "../utils/notification";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CirculareSpinner from "../utils/CirculareSpinner";
export const City = () => {
  const { cityName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [filterSelectedOption, setFilterSelectedOption] = useState(0);
  const [localLoader, setLocalLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const fetchCityData = async (fetchForCity) => {
      const response = await getHotelsFromCity(fetchForCity);
      if (response.success === true) {
        //console.log(response);
        setHotels(response.data);
      } else {
        showErrorNotification("something wrong with data fetching");
      }
      setIsLoading(false);
    };

    fetchCityData(cityName);
  }, [cityName]);

  const handleHotelNavigation = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };

  const sortData = (event) => {
    if (event.target.value == "1") {
      setLocalLoader(true);
      setFilterSelectedOption(1);
      let fetchedData = [...hotels];
      fetchedData.sort((a, b) => {
        return b.rating - a.rating;
      });
      setHotels(fetchedData);
      setLocalLoader(false);
    } else {
      setLocalLoader(true);
      setFilterSelectedOption(2);
      let fetchedData = [...hotels];
      fetchedData.sort((a, b) => {
        return a.rating - b.rating;
      });
      setHotels(fetchedData);
      setLocalLoader(false);
    }
  };

  return (
    <>
      <div className="h-auto w-[100vw] centerDiv flex-col">
        <div className="h-[8vh] w-[100vw] min-h-[72px] max-w-[1150px]">
          <Navbar />
        </div>
        {isLoading ? (
          <>
            <div
              data-testid="loader-testid"
              className="h-[92vh] w-[100vw] flex centerDiv"
            >
              <Spinners />
            </div>
          </>
        ) : (
          <>
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
                Sort
              </span>
              <div className="flex flex-col gap-6">
                <label className="flex gap-2 ml-5 text-[17px] items-center cursor-pointer">
                  <input
                    type="radio"
                    value="1"
                    checked={filterSelectedOption == 1}
                    onChange={sortData}
                    data-testid={"mobile-high-to-low"}
                    className="cursor-pointer"
                  />
                  highest rating to lowest
                </label>
                <label className="flex gap-2 ml-5 text-[17px] items-center cursor-pointer">
                  <input
                    type="radio"
                    value="2"
                    checked={filterSelectedOption == 2}
                    onChange={sortData}
                    data-testid={"mobile-low-to-high"}
                    className="cursor-pointer"
                  />
                  lowest rating to highest
                </label>
              </div>
            </div>
            <div className="h-[25vh] min-h-[225px] max-w-[1150px] w-[100vw] relative md:h-[30vh] shadow-lg">
              <img
                src={hotels[0].backgroundImage[0]}
                alt="CityImage"
                className="h-full w-full object-cover max-w-[1150px] md:hidden"
              />
              <img
                src={hotels[0].backgroundImage[1]}
                alt="CityImage"
                className="hide md:flex md:h-full md:w-full md:object-cover md:max-w-[1150px]"
              />
              <div className="absolute top-3 left-4 md:left-10">
                <MdTune
                  className="text-[30px] cursor-pointer text-white md:text-[40px] lg:hidden"
                  onClick={() => setShowFilter(true)}
                />
              </div>
              <span className="absolute bottom-4 left-4 text-[45px] font-extrabold text-[rgb(246,180,0)] md:text-[55px] md:left-8">
                {hotels[0].cityName}
              </span>
            </div>
            {/* this is for larger screen */}
            <div className="h-auto w-[100vw] flex gap-1 max-w-[1150px]">
              <div className="hide lg:shadow-[-2px_0px_4px_rgba(0,0,0,0.1)] lg:flex lg:h-[63vh] lg:w-[25vw] lg:flex-col lg:gap-6 shadow-xl">
                <div className="h-[50px] w-full ml-3  pt-3 flex justify-between items-center">
                  <span className=" addFont font-bold text-[25px]">
                    Filters
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  <label className="flex gap-2 ml-5 text-[17px] items-center cursor-pointer">
                    <input
                      type="radio"
                      value="1"
                      checked={filterSelectedOption == 1}
                      data-testid={"desktop-high-to-low"}
                      onChange={sortData}
                      className="cursor-pointer"
                    />
                    highest rating to lowest
                  </label>
                  <label className="flex gap-2 ml-5 text-[17px] items-center cursor-pointer">
                    <input
                      type="radio"
                      value="2"
                      data-testid={"desktop-low-to-high"}
                      checked={filterSelectedOption == 2}
                      onChange={sortData}
                      className="cursor-pointer"
                    />
                    lowest rating to highest
                  </label>
                </div>
              </div>
              <div className="h-auto w-[100vw] centerDiv flex-col shadow-[2px_0px_4px_rgba(0,0,0,0.1)] lg:w-[70vw] lg:justify-normal">
                {localLoader ? (
                  <>
                    <CirculareSpinner />
                  </>
                ) : (
                  <>
                    {hotels &&
                      hotels.map((hotel) => (
                        <div
                          key={hotel._id}
                          data-testid={hotel._id}
                          onClick={() => handleHotelNavigation(hotel._id)}
                          className="h-auto w-[80%] max-w-[350px] shadow-lg rounded-[20px] p-3 flex flex-col mt-3 md:flex-row md:max-w-[750px] cursor-pointer"
                        >
                          <img
                            src={hotel.images[0]}
                            alt="RoomImage"
                            className="h-[180px] w-full object-cover md:w-[35%] md:h-[220px]"
                          />
                          <div className="h-auto w-full flex flex-col gap-2 md:w-[65%]">
                            <div className="h-auto p-2 min-h-[40px] w-full flex justify-between mt-2">
                              <span className="flex items-center pl-2 addFont text-[18px] font-bold">
                                {hotel.name}
                              </span>
                              <span className="flex pr-2 addFont">
                                <span className="font-semibold addFont">
                                  Rating
                                </span>
                                &nbsp;&nbsp;
                                {hotel.rating}
                              </span>
                            </div>
                            <div className="h-[40px] w-full flex pl-2 gap-3 items-center md:pl-5">
                              <span className="addFont font-bold">
                                Available Dates
                              </span>
                              <MdDateRange className="text-[20px]" />
                            </div>
                            <div className="h-auto w-full flex gap-[2px] md:ml-2">
                              <div className="h-auto w-[40px]">
                                <MdLocationOn className="text-[35px]" />
                              </div>
                              <div className="h-auto w-auto">
                                <span className=""> {hotel.address}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </>
        )}
        <ToastContainer />
      </div>
    </>
  );
};
