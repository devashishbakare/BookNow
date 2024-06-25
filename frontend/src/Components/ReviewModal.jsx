import { useEffect, useRef, useState } from "react";
import propType from "prop-types";
import { IoMdCloseCircle, IoIosStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../utils/notification";
import { createReview, editReview } from "../utils/api";
import CirculareSpinner from "../utils/CirculareSpinner";
export const ReviewModal = ({
  parentObject,
  requestFor,
  modalStatus,
  closeModal,
  updateChanges,
}) => {
  const modalRef = useRef();
  const [starLength, setStarLength] = useState(new Array(5).fill(false));
  const [rating, setRating] = useState();
  const [reviewText, setReviewText] = useState();
  const [localLoader, setLocalLoader] = useState(false);

  useEffect(() => {
    if (modalStatus) {
      modalRef.current.focus();
    }
    if (parentObject) {
      setRating(parentObject.rating);
      setReviewText(parentObject.reviewText);
      const updatedStarLength = new Array(5).fill(false);
      for (let i = 0; i < parentObject.rating; i++) {
        updatedStarLength[i] = true;
      }
      setStarLength(updatedStarLength);
    }
  }, [modalStatus, parentObject]);

  if (!modalStatus) {
    return null;
  }

  const handleChange = (e) => {
    setReviewText(e.target.value);
  };

  const updateStarRating = (index) => {
    const updatedStarLength = new Array(5).fill(false);
    for (let i = 0; i <= index; i++) {
      updatedStarLength[i] = true;
    }
    setRating(index + 1);
    setStarLength(updatedStarLength);
  };

  const submitReview = async () => {
    const token = localStorage.getItem("token");
    setLocalLoader(true);
    if (requestFor == 0) {
      const reviewInfo = {
        hotelId: parentObject.hotelId,
        rating,
        reviewText,
      };
      const response = await createReview(token, reviewInfo);
      if (response.success) {
        updateChanges(response.data, 0);
        showSuccessNotification("Review has been added successfully");
      } else {
        showErrorNotification("Something went wrong, try again later");
      }
    } else {
      const updateReviewInfo = {
        reviewId: parentObject._id,
        rating,
        reviewText,
      };
      const response = await editReview(token, updateReviewInfo);
      if (response.success) {
        updateChanges(response.data, 1);
        showSuccessNotification("Review has been updated successfully");
      } else {
        showErrorNotification("Something went wrong, try again later");
      }
    }
    setLocalLoader(false);
    closeModal();
  };
  const handleCloseModal = () => {
    setRating(0);
    setReviewText("");
    setStarLength(new Array(5).fill(false));
    closeModal();
  };
  return (
    <>
      <div className="modal-overlay">
        <div
          ref={modalRef}
          className="h-auto max-w-[400px] w-full shadow-md p-3 bg-[#fbfbfb] flex flex-col gap-1"
        >
          {localLoader ? (
            <div className="h-[500px] w-full centerDiv">
              <CirculareSpinner />
            </div>
          ) : (
            <div className="h-auto w-full flex flex-col gap-1">
              <div className="h-[50px] w-full flex mb-3">
                <div className="h-full w-[80%] flex items-center  pl-2 addFont text-[1.1rem]">
                  Review
                </div>
                <div
                  onClick={() => handleCloseModal()}
                  className="h-full w-[20%] flex centerDiv"
                >
                  <IoMdCloseCircle className="text-[1.6rem]" />
                </div>
              </div>
              <div className=" h-auto w-full flex flex-col gap-3">
                <div className="h-[80px] w-full ">
                  <div className="h-[40%] w-full flex items-center pl-3 text-[1.1rem]">
                    Add your rating
                  </div>
                  <div className="h-[60%]  w-full flex items-center pl-3 gap-4">
                    {/* <MdOutlineStar className="text-[blue] text-[1.6rem]" /> */}
                    {starLength.map((value, index) =>
                      value ? (
                        <MdOutlineStar
                          key={index}
                          onClick={() => updateStarRating(index)}
                          className="text-[#003b95] text-[1.6rem]"
                        />
                      ) : (
                        <IoIosStarOutline
                          onClick={() => updateStarRating(index)}
                          key={index}
                          className="text-[1.6rem]"
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="h-auto w-full  flex flex-col gap-4">
                  <div className="mt-2 mb-2 w-full flex items-center pl-3 text-[1.1rem]">
                    Add your review
                  </div>
                  <div className="h-auto w-[95%] ml-2 centerDiv rounded-lg border-[1px] border-gray-300">
                    <textarea
                      name="review_text"
                      rows="5"
                      cols="45"
                      className=" w-full rounded-lg pl-2 pt-3 pr-2 outline-none overflow-x-hidden bg-gray-200 shadow-2xl"
                      // value={values.additional_contact_information}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      value={reviewText}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-1 h-[90px] w-full flex">
                  <div className="h-full w-[50%] flex items-center">
                    <button
                      onClick={() => submitReview()}
                      className="h-[55px] w-[150px] bg-[#003b95] text-white rounded-md ml-4"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="h-full w-[50%] flex items-center">
                    <button
                      onClick={() => handleCloseModal()}
                      className="h-[55px] w-[150px] bg-[#003b95] text-white rounded-md ml-3"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ReviewModal.propTypes = {
  parentObject: propType.object,
  requestFor: propType.number.isRequired,
  modalStatus: propType.bool.isRequired,
  closeModal: propType.func.isRequired,
  updateChanges: propType.func.isRequired,
};
