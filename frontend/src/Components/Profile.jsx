import { Navbar } from "./Navbar";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate, useLocation } from "react-router-dom";
import { TbBrandBooking } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { MdOutlineRateReview, MdOutlineLogin } from "react-icons/md";
import { Review } from "./Review";
import { useEffect, useState } from "react";
import {
  fetchUserDetails,
  fetchCurrentBooking,
  fetchHistory,
  fetchUserReviews,
} from "../utils/api";
import { showErrorNotification } from "../utils/notification";
import { ToastContainer } from "react-toastify";
import Spinners from "../utils/Spinners";
import CirculareSpinner from "../utils/CirculareSpinner";
import { BookingCart } from "./BookingCart";
export const Profile = () => {
  const [userDetails, setUserDetails] = useState();
  const [currentBooking, setCurrentBooking] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [localLoader, setLocalLoader] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const [pastBookings, setPastBookings] = useState();
  const [userReviews, setUserReviews] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      if (token == null) {
        const currentPath = location.pathname;
        navigate("/signIn", { state: currentPath });
      }
      const userDetailsResponse = await fetchUserDetails(token);
      const currentBookingResponse = await fetchCurrentBooking(token);
      if (userDetailsResponse.success && currentBookingResponse.success) {
        setUserDetails(userDetailsResponse.data);
        setCurrentBooking(currentBookingResponse.data);
        setSelectedOptions(0);
        setPastBookings([]);
      } else {
        showErrorNotification("Something went wrong, try again later");
      }
      setIsLoading(false);
    };
    fetchDetails();
  }, [token, location.pathname, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate(`/`);
  };

  const fetchPastBookings = async () => {
    setLocalLoader(true);
    const token = localStorage.getItem("token");
    const response = await fetchHistory(token);
    if (response.success) {
      setPastBookings(response.data);
    } else {
      showErrorNotification(
        "Something went wrong while fetching details, try again later"
      );
    }
    setSelectedOptions(1);
    setLocalLoader(false);
  };

  const fetchReviews = async () => {
    const token = localStorage.getItem("token");
    setLocalLoader(true);
    const response = await fetchUserReviews(token);
    if (response.success) {
      setUserReviews(response.data);
    } else {
      showErrorNotification(
        "Something went wrong while fetch reviews, try again later"
      );
    }
    setLocalLoader(false);
    setSelectedOptions(2);
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col centerDiv bg-[#f4f4f4]">
        {isLoading ? (
          <>
            <div className="h-full w-full centerDiv">
              <Spinners />
            </div>
          </>
        ) : (
          <>
            <div className="h-[8vh] w-full max-w-[1150px]">
              <Navbar />
            </div>
            <div className="h-[92vh] w-full shadow-xl max-w-[1150px] flex">
              <div className="addBorder h-full w-full flex flex-col items-center md:w-[35%]">
                {userDetails && (
                  <div className="h-[150px] w-[95%] flex flex-row centerDiv bg-[#003b95] mt-2 rounded-lg shadow-sm md:w-[98%]">
                    {" "}
                    {/*cart*/}
                    <div className="h-full w-[40%] centerDiv">
                      <div className="h-[110px] w-[110px] rounded-[50%] centerDiv bg-white shadow-lg">
                        <span className="text-[3rem] font-bold capitalize">
                          {userDetails.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="h-full w-[60%] flex flex-col justify-center text-[#F5FEFD]">
                      <div className="h-auto w-full  text-[1.2rem] font-bold m-2">
                        {userDetails.name}
                      </div>
                      <div className="h-[20%] w-full ml-1 md:text-[0.9rem] truncate">
                        {userDetails.email}
                      </div>
                    </div>
                  </div>
                )}
                <div className="h-auto w-full flex flex-col gap-3">
                  <div
                    onClick={() => setSelectedOptions(0)}
                    className="h-[70px] w-[90%] flex items-center justify-between mt-3"
                  >
                    <span className="pl-6 flex gap-2 items-center addFont text-[1.1rem]">
                      <TbBrandBooking className="text-[1.6rem]" />
                      Current Bookings
                    </span>
                    <SlArrowRight className="text-[1.2rem]" />
                  </div>
                  <hr className="border-[1px] border-gray-300 w-[90%] ml-3" />
                  <div
                    onClick={() => fetchPastBookings()}
                    className="h-[70px] w-[90%] flex items-center justify-between"
                  >
                    <span className="pl-6 flex gap-2 items-center addFont text-[1.1rem]">
                      <FaHistory className="text-[1.4rem] mr-1" />
                      Past Bookings
                    </span>
                    <SlArrowRight className="text-[1.2rem]" />
                  </div>
                  <hr className="border-[1px] border-gray-300 w-[90%] ml-3" />
                  <div
                    onClick={() => fetchReviews()}
                    className="h-[70px] w-[90%] flex items-center justify-between"
                  >
                    <span className="pl-6 flex gap-2 items-center addFont text-[1.1rem]">
                      {" "}
                      <MdOutlineRateReview className="text-[1.6rem] mt-1" />
                      Reviews
                    </span>
                    <SlArrowRight className="text-[1.2rem]" />
                  </div>
                  <hr className="border-[1px] border-gray-300 w-[90%] ml-3" />
                  <div
                    onClick={() => logout()}
                    className="h-[70px] w-[90%] flex items-center justify-between"
                  >
                    <span className="pl-6 flex gap-2 items-center addFont text-[1.1rem]">
                      <MdOutlineLogin className="text-[1.6rem]" />
                      Log-Out
                    </span>
                    <SlArrowRight className="text-[1.2rem]" />
                  </div>
                  <hr className="border-[1px] border-gray-300 w-[90%] ml-3" />
                </div>
              </div>

              <div className="hidden md:flex h-full w-[65%]">
                {localLoader ? (
                  <div className="h-full w-full centerDiv">
                    <CirculareSpinner />
                  </div>
                ) : (
                  <>
                    {selectedOptions === 0 && (
                      <div className="h-full w-full flex flex-col">
                        {currentBooking.length === 0 ? (
                          <>
                            <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                              No current Bookings Found
                            </div>
                          </>
                        ) : (
                          currentBooking.map((bookingDetails) => (
                            <BookingCart
                              key={bookingDetails.id + "curr"}
                              bookingStatus={0}
                              details={bookingDetails}
                            />
                          ))
                        )}
                      </div>
                    )}
                    {selectedOptions === 1 && (
                      <div className="h-full w-full flex flex-col">
                        {pastBookings && pastBookings.length === 0 ? (
                          <>
                            <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                              No past bookings found
                            </div>
                          </>
                        ) : (
                          pastBookings.map((bookingDetails) => (
                            <BookingCart
                              key={bookingDetails.id + "past"}
                              bookingStatus={1}
                              details={bookingDetails}
                            />
                          ))
                        )}
                      </div>
                    )}
                  </>
                )}

                {selectedOptions == 2 && (
                  <Review
                    userReviews={userReviews}
                    setUserReviews={setUserReviews}
                  />
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
