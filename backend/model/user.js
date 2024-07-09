const mongoose = require("mongoose");
const Review = require("./review");
const BookingDetails = require("./bookingDetails");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  phoneNumber: {
    type: String,
    requied: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  bookingHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookingDetails",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
