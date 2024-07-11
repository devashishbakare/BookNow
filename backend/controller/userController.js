const mongoose = require("mongoose");
const BookingDetails = require("../model/bookingDetails");
const User = require("../model/user");
const Hotel = require("../model/hotel");
const RoomPackage = require("../model/roomPackage");
const { emailQueue } = require("../config/queue");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fetchBookingHistory = async (req, res) => {
  try {
    const userId = req.userId;
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
          if (currentMonth > month) {
            flag = true;
          } else if (currentMonth == month) {
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

const cancelBooking = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const userId = req.userId;
    const bookingId = req.params.bookingId;
    console.log(userId, bookingId);
    const bookingDetails = await BookingDetails.findById(bookingId).session(
      session
    );
    if (!bookingDetails) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "BookingDetails not found" });
    }
    const user = await User.findById(userId).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "user not found" });
    }
    const hotel = await Hotel.findById(bookingDetails.hotelId).session(session);
    if (!hotel) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "hotel Not Found" });
    }
    const updateSelectedDates = updatedSelectedDates(
      bookingDetails.selectedDates,
      hotel.selectedDates
    );
    //console.log("selectedDates", updateSelectedDates);
    const updateHotelField = {
      $set: {
        selectedDates: updateSelectedDates,
      },
    };
    await Hotel.updateOne({ _id: hotel._id }, updateHotelField, { session });
    const updateBookingHistory = {
      $pull: {
        bookingHistory: bookingId,
      },
    };
    await User.updateOne({ _id: user._id }, updateBookingHistory, { session });

    await BookingDetails.findByIdAndDelete(bookingId).session(session);

    // await emailQueue.add("Cancel Booking", {
    //   from: "booknow@gmail.com",
    //   to: bookingDetails.email,
    //   reason: 1,
    //   subject: "Hotel Booking Cancelation Response",
    //   data: bookingDetails,
    // });

    await session.commitTransaction();
    session.endSession();
    return res.status(200).json({
      message: "hotel has been deleted",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res
      .status(500)
      .json({ error: error.message, message: "something went wrong" });
  }
};

const updatedSelectedDates = (removeDates, selectedDates) => {
  let removeSet = new Set();

  for (let remove of removeDates) {
    for (let selectedDate of selectedDates) {
      if (remove.month === selectedDate.month) {
        let set = new Set(remove.dates);
        let newDates = selectedDate.dates.filter((date) => !set.has(date));

        if (newDates.length === 0) {
          removeSet.add(remove.month);
        } else {
          selectedDate.dates = newDates;
        }
      }
    }
  }

  const result = selectedDates.filter(
    (selectedDate) => !removeSet.has(selectedDate.month)
  );

  return result;
};

const updateProfileInfo = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, email, phone_number, password } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const updateFields = {
      $set: {
        name: name,
        email: email,
        phoneNumber: phone_number,
        password: hash,
      },
    };
    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {
      new: true,
    });

    const payload = {
      userId: updatedUser._id,
      email: updatedUser.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "3d",
    });
    return res.status(200).json({
      data: { token, userDetails: updatedUser },
      message: "user profile has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "something wrong while updating user",
    });
  }
};

module.exports = {
  fetchBookingHistory,
  fetchUserDetails,
  fetchCurrentBooking,
  fetchBookingDetails,
  cancelBooking,
  updateProfileInfo,
};
