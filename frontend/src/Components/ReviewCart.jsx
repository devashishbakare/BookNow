import { useState } from "react";
import propTypes from "prop-types";
import { MdOutlineStarPurple500, MdMoreHoriz } from "react-icons/md";
import CirculareSpinner from "../utils/CirculareSpinner";
import { ReviewModal } from "./ReviewModal";

export const ReviewCart = ({
  reviewObject,
  updateReviewOption,
  index,
  reviewOption,
  updateReview,
  deleteReview,
  localLoader,
}) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [currReview, setCurrReview] = useState();

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  const showReviewModal = (currentReview, optionIndex) => {
    console.log(currentReview);
    setCurrReview(currentReview);
    updateReviewOption(optionIndex);
    setIsReviewModalOpen(true);
  };

  return (
    <>
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
      <ReviewModal
        parentObject={currReview}
        requestFor={1}
        modalStatus={isReviewModalOpen}
        closeModal={closeReviewModal}
        updateChanges={updateReview}
      />
    </>
  );
};
ReviewCart.propTypes = {
  reviewObject: propTypes.object,
  updateReviewOption: propTypes.func,
  index: propTypes.number,
  reviewOption: propTypes.array,
  updateReview: propTypes.func,
  deleteReview: propTypes.func,
  localLoader: propTypes.bool,
};
