import { MdOutlineStarPurple500, MdMoreHoriz } from "react-icons/md";
import { useState } from "react";
//import Modal from "../../../Modal";
import { ReviewModal } from "./ReviewModal";
import propTypes from "prop-types";
import CirculareSpinner from "../utils/CirculareSpinner";
import { deleteUserReview } from "../utils/api";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
export const Review = ({ userReviews, setUserReviews }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [currReview, setCurrReview] = useState();
  const [localLoader, setLocalLoader] = useState(false);
  const [reviewOption, setReviewOption] = useState(
    new Array(userReviews.length).fill(false)
  );
  const updateReviewOption = async (index) => {
    let storeReviewOption = { ...reviewOption };
    storeReviewOption[index] = !storeReviewOption[index];
    setReviewOption(storeReviewOption);
  };
  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  const showReviewModal = (currentReview, optionIndex) => {
    console.log(currentReview);
    setCurrReview(currentReview);
    updateReviewOption(optionIndex);
    setIsReviewModalOpen(true);
  };

  const updateReviews = (review, request) => {
    if (request == 0) {
      setUserReviews([...userReviews, review]);
    } else if (request == 1) {
      setUserReviews(
        userReviews.map((userReview) => {
          if (userReview._id == review._id) {
            return review;
          }
          return userReview;
        })
      );
    }
  };

  const deleteReview = async (review, index) => {
    setLocalLoader(true);
    const token = localStorage.getItem("token");
    const response = await deleteUserReview(token, review._id);
    if (response.success) {
      setUserReviews(
        userReviews.filter((userReview) => userReview._id != review._id)
      );
      showSuccessNotification("Review has been deleted");
    } else {
      showErrorNotification(
        "something went wrong while deleting review, try again later"
      );
    }
    updateReviewOption(index);
    setLocalLoader(false);
  };

  return (
    <>
      <div className="h-full w-[90%] flex flex-col overflow-x-hidden mt-3 pl-3">
        {userReviews.length == 0 && (
          <>
            <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
              Reviews will appear here once added.
            </div>
          </>
        )}
        {userReviews.length > 0 &&
          userReviews.map((reviewObject, index) => (
            <div
              className="relative z-10 h-auto mt-2 mb-2 w-full shadow-lg flex flex-col"
              key={reviewObject._id}
            >
              <div className="h-auto mt-2 mb-2 w-full centerDiv">
                <span className="h-full w-[50%] flex items-center pl-3 text-[1.1rem] font-bold addFont">
                  {reviewObject.hotelName}
                </span>
                <span className="h-auto w-[40%] flex flex-row-reverse font-semibold addFont">
                  {reviewObject.date.slice(0, 10)}
                </span>
                <span
                  onClick={() => updateReviewOption(index)}
                  className="h-auto w-[10%] centerDiv"
                >
                  <MdMoreHoriz className="text-[1.3rem]  z-10" />
                </span>
                {reviewOption[index] && (
                  <div className="absolute z-20 border-[1px] border-gray-300 top-[8px] right-[2%] flex flex-col bg-white">
                    <span
                      onClick={() => showReviewModal(reviewObject, index)}
                      className="h-[40px] w-[100px] border-b-[1px] border-gray-300 centerDiv"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => deleteReview(reviewObject, index)}
                      className="h-[40px] w-[100px] border-b-[1px] border-gray-300 centerDiv"
                    >
                      {localLoader ? <CirculareSpinner /> : <>Delete</>}
                    </span>
                    <span
                      onClick={() => updateReviewOption(index)}
                      className="h-[40px] w-[100px] centerDiv"
                    >
                      Close
                    </span>
                  </div>
                )}
              </div>
              <div className="h-auto mt-2 mb-2 w-full flex flex-col">
                <span className="h-auto w-full mt-1 mb-2 text-[15px] p-3">
                  {reviewObject.reviewText}
                </span>
                <span className="h-[60px] w-full flex gap-1 pl-3">
                  {Array.from({ length: reviewObject.rating }, (_, index) => (
                    <span key={index} className="centerDiv">
                      <MdOutlineStarPurple500 className="text-[1.4rem] text-[#003b95]" />
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
      </div>
      <ReviewModal
        parentObject={currReview}
        requestFor={1}
        modalStatus={isReviewModalOpen}
        closeModal={closeReviewModal}
        updateChanges={updateReviews}
      />
    </>
  );
};

Review.propTypes = {
  userReviews: propTypes.array.isRequired,
  setUserReviews: propTypes.array.isRequired,
};
