import propTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { BookingCart } from "./BookingCart";
import { Review } from "./Review";
import { useEffect, useState } from "react";
import { RiSortDesc } from "react-icons/ri";
import Spinners from "../utils/Spinners";
export const ShowProfileInfo = ({
  modalStatus,
  closeModal,
  selectedOptions,
  fetchedData,
}) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [details, setDetails] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const updateData = () => {
      console.log("review Data ", fetchedData);
      if (selectedOptions !== 2) {
        setDetails(fetchedData);
      } else {
        setReviewData(fetchedData);
      }
    };
    updateData();
  }, [fetchedData, selectedOptions]);

  if (!modalStatus) {
    return null;
  }

  const sortFetchData = (index) => {
    // 1 ) bookingDate -> newest to oldest
    // 2 ) bookingDate -> oldest to newest
    // 3 ) check in date -> newest to oldest
    // 4 ) check in date -> oldest to oldest
    // 5 ) reviewDate -> newest to oldest
    // 6 ) reviewDate -> oldest to newest

    if (index == 1) {
      console.log(index);
      setIsLoading(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return (
          new Date(b.bookingDetails.updatedAt) -
          new Date(a.bookingDetails.updatedAt)
        );
      });
      setDetails(fetchedData);
      setIsLoading(false);
    } else if (index == 2) {
      console.log(index);
      setIsLoading(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return (
          new Date(a.bookingDetails.updatedAt) -
          new Date(b.bookingDetails.updatedAt)
        );
      });
      setDetails(fetchedData);
      setIsLoading(false);
    } else if (index == 3) {
      console.log(index);
      setIsLoading(true);
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
      setDetails(fetchedData);
      setIsLoading(false);
    } else if (index == 4) {
      console.log(index);
      setIsLoading(true);
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
      setDetails(fetchedData);
      setIsLoading(false);
    } else if (index == 5) {
      setIsLoading(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      setReviewData(fetchedData);
      setIsLoading(false);
    } else if (index == 6) {
      setIsLoading(true);
      setShowSortDropdown(false);
      fetchedData.sort((a, b) => {
        return new Date(a.updatedAt) - new Date(b.updatedAt);
      });
      setReviewData(fetchedData);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="h-[100%] w-[100%] flex flex-col bg-white">
          <div className="h-[8vh] w-full flex bg-[#003b95] relative">
            <div
              onClick={() => closeModal()}
              className="h-full w-[70%] flex items-center"
            >
              <span className="h-full w-[50px] centerDiv text-white">
                <IoArrowBack className="text-[1.5rem]" />
              </span>
              <span className="h-full flex-grow flex items-center pl-1 text-[1.2rem] addFont text-white">
                {selectedOptions == 0 && <span>Current Bookings</span>}
                {selectedOptions == 1 && <span>Past Bookings</span>}
                {selectedOptions == 2 && <span>Reviews</span>}
              </span>
            </div>
            <div className="absolute top-0 right-0 h-full w-[30%] centerDiv">
              <button
                onClick={() => setShowSortDropdown(true)}
                className="flex h-[70%] w-[100px] centerDiv gap-2 bg-[#fbfbfb] text-black  border-[1px] border-[#cacaca] rounded-md"
              >
                Sort <RiSortDesc />
              </button>
              {showSortDropdown && (
                <div className="absolute h-auto w-auto top-[110%] right-5 z-50 flex flex-col bg-[#fbfbfb] text-black shadow-md rounded-md">
                  {selectedOptions !== 2 && (
                    <span
                      onClick={() => sortFetchData(1)}
                      className="h-[50px] w-[250px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                    >
                      newest to oldest by booking date
                    </span>
                  )}
                  {selectedOptions !== 2 && (
                    <span
                      onClick={() => sortFetchData(2)}
                      className="h-[50px] w-[250px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                    >
                      oldest to newest by booking date
                    </span>
                  )}
                  {selectedOptions !== 2 && (
                    <span
                      onClick={() => sortFetchData(3)}
                      className="h-[50px] w-[250px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                    >
                      newest to oldest by check in date
                    </span>
                  )}
                  {selectedOptions !== 2 && (
                    <span
                      onClick={() => sortFetchData(4)}
                      className="h-[50px] w-[250px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                    >
                      oldest to newest by check in date
                    </span>
                  )}
                  {selectedOptions == 2 && (
                    <span
                      onClick={() => sortFetchData(5)}
                      className="h-[50px] w-[180px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
                    >
                      newest to oldest
                    </span>
                  )}
                  {selectedOptions == 2 && (
                    <span
                      onClick={() => sortFetchData(6)}
                      className="h-[50px] w-[180px] mr-4 ml-2 flex items-center pl-2 font-light border-b-[1px] border-[#cacaca]"
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
          </div>
          <div className="h-[92vh] w-full overflow-x-scroll">
            {isLoading ? (
              <div className="h-full w-full centerDiv">
                <Spinners />
              </div>
            ) : (
              <>
                {selectedOptions == 0 && (
                  <div className="h-full w-full flex flex-col">
                    {details && details.length === 0 ? (
                      <>
                        <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                          No current booking found
                        </div>
                      </>
                    ) : (
                      details.map((bookingDetails) => (
                        <BookingCart
                          key={bookingDetails.bookingDetails._id + "curr"}
                          bookingStatus={0}
                          details={bookingDetails}
                        />
                      ))
                    )}
                  </div>
                )}
                {selectedOptions == 1 && (
                  <div className="h-full w-full flex flex-col">
                    {details && details.length === 0 ? (
                      <>
                        <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                          No past bookings found
                        </div>
                      </>
                    ) : (
                      details.map((bookingDetails) => (
                        <BookingCart
                          key={bookingDetails.bookingDetails._id + "past"}
                          bookingStatus={1}
                          details={bookingDetails}
                        />
                      ))
                    )}
                  </div>
                )}
                {selectedOptions == 2 && <Review reviews={reviewData} />}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
ShowProfileInfo.propTypes = {
  modalStatus: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
  selectedOptions: propTypes.number,
  fetchedData: propTypes.array,
};
