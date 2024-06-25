import propTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { BookingCart } from "./BookingCart";
import { Review } from "./Review";

export const ShowProfileInfo = ({
  modalStatus,
  closeModal,
  selectedOptions,
  fetchedData,
}) => {
  if (!modalStatus) {
    return null;
  }

  return (
    <>
      <div className="modal-overlay">
        <div className="h-[100%] w-[100%] flex flex-col bg-white">
          <div
            onClick={() => closeModal()}
            className="h-[70px] w-full flex bg-[#003b95] "
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
          {selectedOptions == 0 && (
            <div className="h-full w-full flex flex-col">
              {fetchedData && fetchedData.length === 0 ? (
                <>
                  <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                    No current booking found
                  </div>
                </>
              ) : (
                fetchedData.map((bookingDetails) => (
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
              {fetchedData && fetchedData.length === 0 ? (
                <>
                  <div className="h-full w-full addFont opacity-30 text-[1.5rem] centerDiv">
                    No past bookings found
                  </div>
                </>
              ) : (
                fetchedData.map((bookingDetails) => (
                  <BookingCart
                    key={bookingDetails.bookingDetails._id + "past"}
                    bookingStatus={1}
                    details={bookingDetails}
                  />
                ))
              )}
            </div>
          )}
          {selectedOptions == 2 && <Review reviews={fetchedData} />}
        </div>
      </div>
    </>
  );
};
ShowProfileInfo.propTypes = {
  modalStatus: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
  selectedOptions: propTypes.number.isRequired,
  fetchedData: propTypes.array,
};
