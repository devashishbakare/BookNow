const BookingDetails = require("../model/bookingDetails");
const User = require("../model/user");
const Hotel = require("../model/hotel");
const RoomPackage = require("../model/roomPackage");
const fetchBookingHistory = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentDate = date.getDate();

    const storeResult = await Promise.all(
      user.bookingHistory.map(async (bookingId) => {
        const bookingDetails = await BookingDetails.findById(bookingId);
        let flag = false;
        bookingDetails.selectedDates.forEach((selectedDate) => {
          const { month, dates } = selectedDate;
          if (month >= currentMonth) {
            dates.forEach((date) => {
              if (date < currentDate) {
                flag = true;
              }
            });
          }
        });
        if (flag) {
          const hotelDetails = await Hotel.findById(bookingDetails.hotelId);
          return { bookingDetails, hotelImage: hotelDetails.images[0] };
        }
        return null;
      })
    );

    const result = storeResult.filter((booking) => booking !== null);

    return res.status(200).json({
      data: result,
      message: "booking history",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong, try again later",
    });
  }
};

const fetchUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json({ data: user, message: "user details" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong while fetching details",
    });
  }
};

const fetchCurrentBooking = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentDate = date.getDate();

    const storeResult = await Promise.all(
      user.bookingHistory.map(async (bookingId) => {
        const bookingDetails = await BookingDetails.findById(bookingId);
        let flag = false;
        bookingDetails.selectedDates.forEach((selectedDate) => {
          const { month, dates } = selectedDate;
          if (month >= currentMonth) {
            dates.forEach((date) => {
              if (date >= currentDate) {
                flag = true;
              }
            });
          }
        });
        if (flag) {
          const hotelDetails = await Hotel.findById(bookingDetails.hotelId);
          return { bookingDetails, hotelImage: hotelDetails.images[0] };
        }
        return null;
      })
    );

    const result = storeResult.filter((booking) => booking !== null);

    return res.status(200).json({
      data: result,
      message: "current bookings",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong, try again later",
    });
  }
};

const fetchBookingDetails = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("in fetch bookingDetails");
    const bookingId = req.params.bookingId;

    const bookingDetails = await BookingDetails.findById(bookingId);
    const roomPackageId = bookingDetails.roomPackage;
    const roomDetails = await RoomPackage.findById(roomPackageId);
    const roomType = roomDetails.roomType;
    return res.status(200).json({
      data: { bookingDetails, roomType },
      message: "Booking Details fetch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Something went wrong, while fetching booking details",
    });
  }
};

module.exports = {
  fetchBookingHistory,
  fetchUserDetails,
  fetchCurrentBooking,
  fetchBookingDetails,
};
