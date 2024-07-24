import React from "react";
import { Navbar } from "./Navbar";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate, useLocation } from "react-router-dom";
import { TbBrandBooking } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { MdOutlineRateReview, MdOutlineLogin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { EditProfileForm } from "./EditProfileForm";
import { RiSortDesc } from "react-icons/ri";
import { Review } from "./Review";
import { useEffect, useState } from "react";
import { ShowProfileInfo } from "./ShowProfileInfo";
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
import { useWindowSize } from "./useWindowSize";
export const Profile = () => {
  const [userDetails, setUserDetails] = useState();
  const [currentBooking, setCurrentBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [localLoader, setLocalLoader] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const [pastBookings, setPastBookings] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [profileInfoModalStatus, setProfileInfoModalStatus] = useState(false);
  const [modalSelectedOptions, setModalSelectedOptions] = useState();
  const [storeFetchInfo, setStoreFetchInfo] = useState([]);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const windowSize = useWindowSize();
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
        console.log(currentBookingResponse.data);
        //console.log(currentBookingResponse.data);
        setSelectedOptions(0);
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

  const handleCurrentBooking = () => {
    if (windowSize.width < 768) {
      setStoreFetchInfo(currentBooking);
      setModalSelectedOptions(0);
      setProfileInfoModalStatus(true);
    } else {
      setSelectedOptions(0);
    }
  };

  const fetchPastBookings = async () => {
    if (windowSize.width < 768) {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetchHistory(token);
      if (response.success) {
        //console.log("past result", response.data);
        setStoreFetchInfo(response.data);
        setModalSelectedOptions(1);
        setProfileInfoModalStatus(true);
      } else {
        showErrorNotification(
          "Something went wrong while fetching details, try again later"
        );
      }
      setIsLoading(false);
    } else {
      setLocalLoader(true);
      const token = localStorage.getItem("token");
      const response = await fetchHistory(token);
      if (response.success) {
        console.log("past bookings", response.data);
        setPastBookings(response.data);
        setSelectedOptions(1);
      } else {
        showErrorNotification(
          "Something went wrong while fetching details, try again later"
        );
      }

      setLocalLoader(false);
    }
  };

  const fetchReviews = async () => {
    const token = localStorage.getItem("token");
    if (windowSize.width < 768) {
      setIsLoading(true);
      const response = await fetchUserReviews(token);
      if (response.success) {
        setStoreFetchInfo(response.data);
        setModalSelectedOptions(2);
        setProfileInfoModalStatus(true);
      } else {
        showErrorNotification(
          "Something went wrong while fetch reviews, try again later"
        );
      }

      setIsLoading(false);
    } else {
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
    }
  };

  const updateProfileInfoModalStatus = async (indicator) => {
    // if(indicator == 0){
    //   const currentBookingResponse = await fetchCurrentBooking(token);
    //   setCurrentBooking(currentBookingResponse.data);
    // }
    setProfileInfoModalStatus(false);
  };

  const sortFetchData = (index) => {
    // 1 ) bookingDate -> newest to oldest
    // 2 ) bookingDate -> oldest to newest
    // 3 ) check in date -> newest to oldest
    // 4 ) check in date -> oldest to oldest
    // 5 ) reviewDate -> newest to oldest
    // 6 ) reviewDate -> oldest to newest
    let fetchedData = null;
    if (selectedOptions == 0) {
      fetchedData = [...currentBooking];
    } else if (selectedOptions == 1) {
      fetchedData = [...pastBookings];
    } else {
      fetchedData = [...userReviews];
    }

    if (index == 1) {
      console.log(index);
      setShowSortDropdown(false);
      setLocalLoader(true);
      fetchedData.sort((a, b) => {
        return (
          new Date(b.bookingDetails.updatedAt) -
          new Date(a.bookingDetails.updatedAt)
        );
      });
      if (selectedOptions == 0) {
        setCurrentBooking(fetchedData);
      } else {
        setPastBookings(fetchedData);
      }
      setLocalLoader(false);
    } else if (index == 2) {
      console.log(index);
      setLocalLoader(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return (
          new Date(a.bookingDetails.updatedAt) -
          new Date(b.bookingDetails.updatedAt)
        );
      });
      if (selectedOptions == 0) {
        setCurrentBooking(fetchedData);
      } else {
        setPastBookings(fetchedData);
      }
      setLocalLoader(false);
    } else if (index == 3) {
      console.log(index);
      setLocalLoader(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        if (
          a.bookingDetails.selectedDates[0].month ==
          b.bookingDetails.selectedDates[0].month
        ) {
          const aMaxDate = Math.max(...a.bookingDetails.selectedDates[0].dates);
          const bMaxDate = Math.max(...b.bookingDetails.selectedDates[0].dates);
          return bMaxDate - aMaxDate;
        }
        return (
          b.bookingDetails.selectedDates[0].month -
          a.bookingDetails.selectedDates[0].month
        );
      });
      if (selectedOptions == 0) {
        setCurrentBooking(fetchedData);
      } else {
        setPastBookings(fetchedData);
      }
      setLocalLoader(false);
    } else if (index == 4) {
      //
      console.log(index);
      setLocalLoader(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        if (
          a.bookingDetails.selectedDates[0].month ==
          b.bookingDetails.selectedDates[0].month
        ) {
          const aMaxDate = Math.max(...a.bookingDetails.selectedDates[0].dates);
          const bMaxDate = Math.max(...b.bookingDetails.selectedDates[0].dates);
          return aMaxDate - bMaxDate;
        }
        return (
          a.bookingDetails.selectedDates[0].month -
          b.bookingDetails.selectedDates[0].month
        );
      });
      if (selectedOptions == 0) {
        setCurrentBooking(fetchedData);
      } else {
        setPastBookings(fetchedData);
      }
      setLocalLoader(false);
    } else if (index == 5) {
      setLocalLoader(true);
      setShowSortDropdown(false);
      console.log("before, index 5", fetchedData);
      fetchedData.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      setUserReviews(fetchedData);
      setLocalLoader(false);
    } else if (index == 6) {
      setLocalLoader(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return new Date(a.updatedAt) - new Date(b.updatedAt);
      });
      setUserReviews(fetchedData);
      setLocalLoader(false);
    }
  };
  const updateBookingCart = (bookingId) => {
    setCurrentBooking((prev) =>
      prev.filter((booking) => booking.bookingDetails._id !== bookingId)
    );
  };
  const handleEditProfile = () => {
    if (windowSize.width < 768) {
      setModalSelectedOptions(3);
      setProfileInfoModalStatus(true);
    } else {
      setSelectedOptions(3);
    }
  };

  const updateUserInformation = (updatedUserInfo) => {
    setUserDetails(updatedUserInfo);
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col centerDiv bg-[#f4f4f4]">
        {isLoading ? (
          <>
            <div
              data-testid="loader-testid"
              className="h-full w-full centerDiv"
            >
              <Spinners />
            </div>
          </>
        ) : (
          <>
            <div className="h-[8vh] w-full max-w-[1150px]">
              <Navbar />
            </div>
            <div className="h-[92vh] w-full shadow-xl max-w-[1150px] flex">
              <div className=" border-[1px] border-[#d7d7d7] h-full w-full flex flex-col items-center md:w-[35%]">
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
                    onClick={() => handleCurrentBooking()}
                    className="h-[70px] w-[90%] flex items-center justify-between mt-3"
                    data-testid="currentBookingButton-testid"
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
                    data-testid="pastBookingButton-testid"
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
                    data-testid="reviewButton-testid"
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
                    onClick={() => handleEditProfile()}
                    className="h-[70px] w-[90%] flex items-center justify-between"
                    data-testid="editProfile-testid"
                  >
                    <span className="pl-6 flex gap-2 items-center addFont text-[1.1rem]">
                      <CiEdit className="text-[1.4rem] mr-1" />
                      Edit Profile
                    </span>
                    <SlArrowRight className="text-[1.2rem]" />
                  </div>
                  <hr className="border-[1px] border-gray-300 w-[90%] ml-3" />
                  <div
                    onClick={() => logout()}
                    className="h-[70px] w-[90%] flex items-center justify-between"
                    data-testid="logoutButton-testid"
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
                    <div className="h-full w-full flex flex-col relative">
                      {pastBookings.length > 1 ||
                        currentBooking.length > 1 ||
                        (userReviews.length > 1 && (
                          <div className="absolute top-2 right-1 h-[50px] w-full flex items-center flex-row-reverse pr-[20px]">
                            <button
                              onClick={() => setShowSortDropdown(true)}
                              className="flex h-[90%] w-[100px] centerDiv gap-2 bg-[#fbfbfb] text-black  border-[1px] border-[#cacaca] rounded-md"
                            >
                              Sort <RiSortDesc />
                            </button>
                            {showSortDropdown && (
                              <div className="absolute h-auto w-auto top-[110%] right-5 z-50 flex flex-col bg-[#fbfbfb] text-black shadow-md rounded-md">
                                {selectedOptions !== 2 && (
                                  <span
                                    onClick={() => sortFetchData(1)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    newest to oldest by booking date
                                  </span>
                                )}
                                {selectedOptions !== 2 && (
                                  <span
                                    onClick={() => sortFetchData(2)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    oldest to newest by booking date
                                  </span>
                                )}

                                {selectedOptions !== 2 && (
                                  <span
                                    onClick={() => sortFetchData(3)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    newest to oldest by check in date
                                  </span>
                                )}
                                {selectedOptions !== 2 && (
                                  <span
                                    onClick={() => sortFetchData(4)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    oldest to newest by check in date
                                  </span>
                                )}
                                {selectedOptions == 2 && (
                                  <span
                                    onClick={() => sortFetchData(5)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    newest to oldest
                                  </span>
                                )}
                                {selectedOptions == 2 && (
                                  <span
                                    onClick={() => sortFetchData(6)}
                                    className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                                  >
                                    oldest to newest
                                  </span>
                                )}
                                <span
                                  onClick={() => setShowSortDropdown(false)}
                                  className="h-[50px] w-auto mr-4 ml-2 flex items-center pl-2 font-light"
                                >
                                  close
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      <div className="h-full w-full overflow-x-scroll">
                        {/* <div className="h-full w-full flex flex-col"></div> */}
                        {selectedOptions === 0 && (
                          <div className="h-full w-full flex flex-col">
                            {currentBooking && currentBooking.length === 0 ? (
                              <>
                                <div className="h-full w-full addFont opacity-30 text-[1.5rem]  centerDiv">
                                  No current bookings found
                                </div>
                              </>
                            ) : (
                              currentBooking.length > 0 &&
                              currentBooking.map((bookingDetails) => (
                                <BookingCart
                                  key={`${bookingDetails.bookingDetails._id}-curr`}
                                  bookingStatus={0}
                                  details={bookingDetails}
                                  updateParentCart={updateBookingCart}
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
                              pastBookings.length > 0 &&
                              pastBookings.map((bookingDetails) => (
                                <BookingCart
                                  key={`${bookingDetails.bookingDetails._id}-past`}
                                  bookingStatus={1}
                                  details={bookingDetails}
                                  updateParentCart={updateBookingCart}
                                />
                              ))
                            )}
                          </div>
                        )}
                        {selectedOptions == 2 && (
                          <Review reviews={userReviews} />
                        )}
                        {selectedOptions == 3 && (
                          <>
                            <EditProfileForm
                              handleUpdateUser={updateUserInformation}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
        <ToastContainer />
        <ShowProfileInfo
          modalStatus={profileInfoModalStatus}
          closeModal={updateProfileInfoModalStatus}
          selectedOptions={modalSelectedOptions}
          fetchedData={storeFetchInfo}
          updateWideCurrentDetails={updateBookingCart}
          handleUpdateUser={updateUserInformation}
        />
      </div>
    </>
  );
};
