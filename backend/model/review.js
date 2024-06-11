const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    userName: {
      type: String,
      required: true,
      min: 4,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
