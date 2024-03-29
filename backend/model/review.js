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
    reviewText: {
      type: String,
      required: true,
      trim: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
