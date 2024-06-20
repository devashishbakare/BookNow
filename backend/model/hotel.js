const mongoose = require("mongoose");
const RoomPackage = require("./roomPackage");
const Review = require("./review");
const Host = require("./hotelHost");

const hotelSchema = mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: [String],
    required: true,
    default: [],
  },
  name: {
    type: String,
    min: 3,
  },
  images: {
    type: [String],
    default: [],
  },
  address: {
    type: String,
    min: 3,
  },
  description: {
    type: String,
    min: 3,
  },
  map: {
    type: String,
    min: 3,
  },
  facilities: {
    type: [Boolean],
    default: [],
  },
  rating: {
    type: Number,
    default: 0,
  },
  ratingScore: {
    type: Number,
    default: 0,
  },
  selectedDates: {
    type: [
      {
        month: Number,
        dates: [Number],
      },
    ],
    default: [],
  },
  roomPackages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomPackage",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
