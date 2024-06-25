import { useState } from "react";
import propTypes from "prop-types";
import { ReviewCart } from "./ReviewCart";
import { deleteUserReview } from "../utils/api";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
export const Review = ({ reviews }) => {
  const [userReviews, setUserReviews] = useState(reviews);
  const [localLoader, setLocalLoader] = useState(false);
  const [reviewOption, setReviewOption] = useState(
    new Array(userReviews.length).fill(false)
  );
  const updateReviewOption = async (index) => {
    let storeReviewOption = { ...reviewOption };
    storeReviewOption[index] = !storeReviewOption[index];
    setReviewOption(storeReviewOption);
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
            <ReviewCart
              key={reviewObject._id}
              reviewObject={reviewObject}
              updateReviewOption={updateReviewOption}
              index={index}
              reviewOption={reviewOption}
              updateReview={updateReviews}
              deleteReview={deleteReview}
              localLoader={localLoader}
            />
          ))}
      </div>
    </>
  );
};

Review.propTypes = {
  reviews: propTypes.array.isRequired,
};
