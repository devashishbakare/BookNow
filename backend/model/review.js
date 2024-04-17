/*
string : reviewer name
string : details review
integer : stars 
string : hotelName 
date : review date
*/

const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
    },
    hotelName: {
      type: String,
      required: true,
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
