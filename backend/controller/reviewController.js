const mongoose = require("mongoose");
const User = require("../model/user");
const Hotel = require("../model/hotel");
const Review = require("../model/review");
const hotel = require("../model/hotel");
const addAllReview = async (req, res) => {
  const reviewData = req.body;
  try {
    const reviews = await Promise.all(
      reviewData.map(
        async (reviewDetails) => await Review.create(reviewDetails)
      )
    );
    return res.status(201).json({ message: "review added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
const addReview = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const userId = req.userId;
    session.startTransaction();
    const { hotelId, rating, reviewText } = req.body;
    const user = await User.findById(userId).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "User not found" });
    }
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Hotel Not Found" });
    }
    const reviewInfo = {
      userId,
      hotelId,
      hotelName: hotel.name,
      userName: user.name,
      rating,
      reviewText,
      date: Date.now(),
    };
    const review = await Review.create([reviewInfo], { session });

    const updateRatingScore = hotel.ratingScore + rating;
    let newRating = updateRatingScore / (hotel.reviews.length + 1);
    const updateFeildInHotel = {
      $push: {
        reviews: review[0]._id,
      },
      $set: {
        ratingScore: updateRatingScore,
        rating: newRating,
      },
    };

    const updateFeildInUser = {
      $push: {
        reviews: review[0]._id,
      },
    };
    await Hotel.findByIdAndUpdate(hotelId, updateFeildInHotel, { session });
    await User.findByIdAndUpdate(userId, updateFeildInUser, { session });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(201)
      .json({ data: review, message: "New review has been added" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while adding review",
    });
  }
};
const editReview = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const userId = req.userId;
    const { reviewId, rating, reviewText } = req.body;
    const user = await User.findById(userId).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "User not found" });
    }
    const review = await Review.findById(reviewId).session(session);
    if (!review) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Review not found" });
    }
    const hotelId = review.hotelId;
    const hotel = await Hotel.findById(hotelId).session(session);
    if (!hotel) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Hotel not found" });
    }
    const updatedRatingScore = hotel.ratingScore - review.rating + rating;
    const updatedHotelRating = updatedRatingScore / hotel.reviews.length;
    hotel.ratingScore = updatedRatingScore;
    hotel.rating = updatedHotelRating;
    await hotel.save({ session });

    review.rating = rating;
    review.reviewText = reviewText;
    review.date = Date.now();
    await review.save({ session });

    await session.commitTransaction();
    session.endSession();
    return res
      .status(200)
      .json({ data: review, message: "review has been updated" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while editing review",
    });
  }
};

const deleteReview = async (req, res) => {
  const reviewId = req.params.reviewId;
  const userId = req.userId;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const review = await Review.findById(reviewId).session(session);
    if (!review) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Review not found" });
    }
    const user = await User.findById(userId).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "User not found" });
    }

    const hotelId = review.hotelId;
    const hotel = await Hotel.findById(hotelId).session(session);
    if (!hotel) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Hotel not found" });
    }
    const updatedRatingScore = hotel.ratingScore - review.rating;
    hotel.ratingScore = updatedRatingScore;
    if (hotel.reviews.length == 1) {
      hotel.rating = 0;
    } else {
      hotel.rating = updatedRatingScore / (hotel.reviews.length - 1);
    }
    hotel.reviews = hotel.reviews.filter((id) => id != reviewId);
    await hotel.save({ session });

    user.reviews = user.reviews.filter((id) => id != reviewId);
    await user.save({ session });

    const deleteReviewResponse = await Review.deleteOne({
      _id: reviewId,
    }).session(session);

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ data: deleteReviewResponse, message: "review has been deleted" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while editing review",
    });
  }
};

const fetchReviews = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const reviewData = await Review.find({ _id: { $in: user.reviews } });
    return res
      .status(200)
      .json({ data: reviewData, message: "User Review fetched successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "something went wrong while fetching user reviews",
    });
  }
};

module.exports = {
  addAllReview,
  addReview,
  editReview,
  deleteReview,
  fetchReviews,
};
