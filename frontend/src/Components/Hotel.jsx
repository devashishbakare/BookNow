import React, { useState } from "react";
import { Navbar } from "./Navbar";
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
} from "react-icons/md";

export const Hotel = () => {
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
  const data = cities[2].rooms[0];
  console.log(data.roomImages[0]);
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
        <hr className="border-1 border-gray-400 w-[95%]" />
        <div className="h-auto w-full addBorder flex flex-col">
          <div className="">available dates for this month</div>
          <div class="max-w-2xl mx-auto">
            <table class="table-auto border border-gray-300">
              <thead>
                <tr>
                  <th class="p-2">Sun</th>
                  <th class="p-2">Mon</th>
                  <th class="p-2">Tue</th>
                  <th class="p-2">Wed</th>
                  <th class="p-2">Thu</th>
                  <th class="p-2">Fri</th>
                  <th class="p-2">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2">1</td>
                  <td class="p-2">2</td>
                  <td class="p-2">3</td>
                  <td class="p-2">4</td>
                  <td class="p-2">5</td>
                  <td class="p-2">6</td>
                  <td class="p-2">7</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="p-2">8</td>
                  <td class="p-2">9</td>
                  <td class="p-2">10</td>
                  <td class="p-2">11</td>
                  <td class="p-2">12</td>
                  <td class="p-2">13</td>
                  <td class="p-2">14</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="p-2">15</td>
                  <td class="p-2">16</td>
                  <td class="p-2">17</td>
                  <td class="p-2">18</td>
                  <td class="p-2">19</td>
                  <td class="p-2">20</td>
                  <td class="p-2">21</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="p-2">22</td>
                  <td class="p-2">23</td>
                  <td class="p-2">24</td>
                  <td class="p-2">25</td>
                  <td class="p-2">26</td>
                  <td class="p-2">27</td>
                  <td class="p-2">28</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="p-2">29</td>
                  <td class="p-2">30</td>
                  <td class="p-2">31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
