const User = require("../model/user");
const BookingDetails = require("../model/bookingDetails");
const Review = require("../model/review");
const Hotel = require("../model/hotel");
const updateUser = async (req, res) => {
  const userId = req.userId;
  console.log(userId);
  try {
    const updateFeild = {
      $set: {
        reviews: [],
        bookingHistory: [],
      },
    };
    const updatedUser = await User.findByIdAndUpdate(userId, updateFeild, {
      new: true,
    });
    return res
      .status(200)
      .json({ data: updatedUser, message: "user has been updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while updating user" });
  }
};

const deleteBookingDetails = async (req, res) => {
  try {
    const response = await BookingDetails.deleteMany({});
    return res.status(200).json({
      data: response,
      message: "All Booking Details has been deleted",
    });
  } catch (error) {
    return res.status(200).json({
      error,
      message: "something went wrong while deleting bookingDetails",
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const response = await Review.deleteMany({});
    return res.status(200).json({
      data: response,
      message: "All reviews has been deleted",
    });
  } catch (error) {
    return res.status(200).json({
      error,
      message: "something went wrong while deleting Reviews",
    });
  }
};

const updateHotel = async (req, res) => {
  try {
    const updateFeild = {
      $set: {
        selectedDates: [],
        reviews: [],
        rating: 0,
      },
    };

    const response = await Hotel.updateMany({}, updateFeild);
    return res
      .status(200)
      .json({ data: response, message: "hotel date has been updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while updating hotel data" });
  }
};

const updateAddReview = async (req, res) => {
  try {
    const { userId, userName, rating, reviewText, date } = req.body;
    console.log(`${userId} ${userName} ${rating} ${reviewText} ${date}`);
    const hotelIds = await Hotel.find({}, { _id: 1 }).lean();

    const storeReviewDocument = await Promise.all(
      hotelIds.map(async (hotelIdObject) => {
        const reviewDocument = await Review.create({
          userId,
          hotelId: hotelIdObject._id,
          userName,
          rating,
          reviewText,
          date,
        });
        const reviewId = reviewDocument._id;
        const hotelId = reviewDocument.hotelId;
        const dataToPush = {
          $push: {
            reviews: reviewId,
          },
        };
        const hotelDocument = await Hotel.findByIdAndUpdate(
          hotelId,
          dataToPush,
          {
            new: true,
          }
        );

        return { reviewDocument, hotelDocument };
      })
    );

    return res.status(200).json({
      data: storeReviewDocument,
      message: "data has been added",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "something went wrong" });
  }
};

const testAPI = async (req, res) => {
  try {
    //const response = await Hotel.find({}, { _id: 1 }).lean();
    //const response = await Review.deleteMany({});
    const feildToBeUpdate = {
      $set: {
        rating: 4,
      },
    };
    const response = await Hotel.updateMany({}, feildToBeUpdate, { new: true });
    return res
      .status(200)
      .json({ data: response, message: "Rating has been updated" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, message: "something went wrong" });
  }
};
const addRatingScore = async (req, res) => {
  try {
    const updateFeild = {
      $set: {
        ratingScore: 12,
      },
    };
    const updateStatus = await Hotel.updateMany({}, updateFeild);
    return res
      .status(200)
      .json({ data: updateStatus, message: "data has been updated" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while updating hotel ratingScore",
    });
  }
};
module.exports = {
  updateUser,
  deleteBookingDetails,
  deleteReview,
  updateHotel,
  updateAddReview,
  testAPI,
  addRatingScore,
};
