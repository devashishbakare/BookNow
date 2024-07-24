import React from "react";
import propTypes from "prop-types";
import { ReviewModal } from "./ReviewModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cancleBooking } from "../utils/api";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
import CirculareSpinner from "../utils/CirculareSpinner";
export const BookingCart = ({ bookingStatus, details, updateParentCart }) => {
  const { hotelImage, bookingDetails } = details;
  const { _id, selectedDates, hotelName, createdAt } = bookingDetails;
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [localLoader, setLocalLoader] = useState(false);
  const navigate = useNavigate();
  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  const getMonthName = (monthNumber) => {
    const date = new Date(2000, monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const showBookingDetails = (bookingId) => {
    navigate(`/bookingDetails/${bookingId}`);
  };

  const updateReviews = () => {};

  const handleCancelBooking = async (bookingId) => {
    console.log(bookingId);
    setLocalLoader(true);
    const token = localStorage.getItem("token");
    const cancelBookingResponse = await cancleBooking(token, bookingId);
    console.log(cancelBookingResponse);
    if (cancelBookingResponse.success) {
      updateParentCart(bookingId);
      showSuccessNotification("Your Booking Has Been cancel");
    } else {
      showErrorNotification("something went wrong, try again later");
    }
    setLocalLoader(false);
  };

  return (
    <>
      <div className="h-auto w-full flex flex-col pl-3">
        <div className="h-auto w-[95%] border-[1px] border-gray-400 shadow-lg flex mt-3 rounded-md">
          <div className="h-auto w-[35%] centerDiv">
            <img
              src={hotelImage}
              alt="roomImage"
              className="h-[160px] w-[90%] object-cover"
            />
          </div>
          <div className="h-full w-[65%] flex flex-col p-2">
            <div className="auto pt-2 pb-2 w-full addFont flex items-center pl-3 text-[1.1rem]">
              {hotelName}
            </div>
            <div className="auto pt-2 pb-2 w-full flex items-center pl-3 text-[1rem]">
              <span className="addFont">Check In Date : &nbsp;</span>
              {selectedDates.map((month, index) => (
                <>
                  {month.dates.map((date, index) => (
                    <>
                      <span className="">{date}</span>
                      {month.dates.length - 1 != index && <>{", "}&nbsp;</>}
                    </>
                  ))}
                  &nbsp;
                  <span className="">{getMonthName(month.month)}</span>
                  {selectedDates.length - 1 != index && <>{", "}&nbsp;</>}
                  &nbsp;
                </>
              ))}
            </div>
            <div className="h-auto pt-2 pb-2 w-full pl-3">
              <span className="addFont">Booking Date : &nbsp;</span>
              {createdAt.substring(0, 10)}
            </div>
            <div className="h-auto pt-2 pb-2 w-full pl-3 underline text-[#003b95]">
              <span
                onClick={() => showBookingDetails(bookingDetails._id)}
                className=""
              >
                View Details
              </span>{" "}
              {bookingStatus == 1 && (
                <span
                  onClick={() => setIsReviewModalOpen(true)}
                  className="ml-3"
                >
                  {localLoader ? (
                    <>
                      <CirculareSpinner />
                    </>
                  ) : (
                    <>
                      <span className="">Add Review</span>
                    </>
                  )}
                </span>
              )}
              {bookingStatus == 0 && (
                <span onClick={() => handleCancelBooking(_id)} className="ml-3">
                  Cancel Booking
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <ReviewModal
        parentObject={details.bookingDetails}
        requestFor={0}
        modalStatus={isReviewModalOpen}
        closeModal={closeReviewModal}
        updateChanges={updateReviews}
      />
    </>
  );
};
BookingCart.propTypes = {
  bookingStatus: propTypes.number,
  details: propTypes.object,
  updateParentCart: propTypes.func,
};
