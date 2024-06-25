import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";
import { showErrorNotification } from "../utils/notification";
import Spinners from "../utils/Spinners";
import { fetchBookingDetails } from "../utils/api";
import { BookingSummery } from "./BookingSummery";

export const BookingDetails = () => {
  const { bookingId } = useParams();
  const [bookingDetails, setBookingDetails] = useState();
  const [roomType, setRoomType] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getDetails = async (token, bookingId) => {
      setIsLoading(true);
      const response = await fetchBookingDetails(token, bookingId);
      if (response.success) {
        console.log(response.data);
        setBookingDetails(response.data.bookingDetails);
        setRoomType(response.data.roomType);
      } else {
        showErrorNotification("something went wrong, try again later");
      }
      setIsLoading(false);
    };
    const token = localStorage.getItem("token");
    getDetails(token, bookingId);
  }, [bookingId]);
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col centerDiv bg-[#f4f4f4]">
        <div className="h-[8vh] w-full max-w-[1150px]">
          <Navbar />
        </div>
        <div className="h-[92vh] w-full max-w-[1150px] centerDiv">
          {isLoading ? (
            <>
              <div className="h-full w-full centerDiv">
                <Spinners />
              </div>
            </>
          ) : (
            <>
              {bookingDetails && (
                <div className="h-full w-full shadow-xl">
                  <BookingSummery
                    bookingDetails={bookingDetails}
                    roomType={roomType}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
