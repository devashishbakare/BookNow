const BookingDetails = require("../model/bookingDetails");
const roomPackage = require("../model/roomPackage");
const RoomPackage = require("../model/roomPackage");
const Review = require("../model/review");
const Hotel = require("../model/hotel");

const confirmBooking = async (req, res) => {
  console.log(req.body);
  try {
    const email = req.body.email;
    if (!email)
      return res.status(500).json({
        error: "email not found",
      });
    const bookingDetails = new BookingDetails({
      email,
      checkInDate: new Date(req.body.checkInDate),
      formData: req.body,
    });

    const bookingSummary = await bookingDetails.save();
    return res.status(200).json({
      message: "document has been created",
      data: bookingSummary,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const deleteAllDocuments = async (req, res) => {
  try {
    const deleteAll = await BookingDetails.deleteMany({});
    return res.status(200).json({
      message: "deleted",
      data: deleteAll,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const addHotelPackage = async (req, res) => {
  const hotelPackage = req.body;

  if (!hotelPackage) {
    return res.status(400).json({ message: "Input Hotel Package are missing" });
  }
  try {
    const response = Promise.all(
      hotelPackage.map(async (package) => await RoomPackage.create(package))
    );
    return res
      .status(201)
      .json({ data: response, message: "Hotel Package Has Been Added" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while adding hotel packages" });
  }
};
const getHotelReview = async (req, res) => {
  try {
    const hotelInfo = await Review.find({});
    const hotelNameToIdMap = {};
    hotelInfo.forEach((data) => {
      if (hotelNameToIdMap.hasOwnProperty(data.hotelName)) {
        hotelNameToIdMap[data.hotelName].push(data._id);
      } else {
        hotelNameToIdMap[data.hotelName] = [data._id];
      }
    });
    return res
      .status(200)
      .json({ data: hotelNameToIdMap, message: "list of hotel Id" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while fetching review" });
  }
};

const getRating = async (req, res) => {
  try {
    const { hotelName } = req.body;
    if (!hotelName) {
      return res.status(400).json({ message: "input data is valid" });
    }

    const hotelReview = await Review.find({ hotelName });
    const totalRating = hotelReview.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    const averageRating = totalRating / hotelReview.length;
    return res
      .status(200)
      .json({ data: averageRating, message: "hotel average rating" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while fetching review" });
  }
};

const addHotel = async (req, res) => {
  try {
    console.log(req.body);
    const hotelData = req.body;
    if (!hotelData)
      return res.status(400).json({ message: "input data in not valid" });

    const hotelDetails = new Hotel(hotelData);
    const hotel = await hotelDetails.save();
    return res
      .status(200)
      .json({ data: hotel, message: "hotel has been added" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while adding hotel" });
  }
};

module.exports = {
  confirmBooking,
  deleteAllDocuments,
  addHotelPackage,
  getHotelReview,
  getRating,
  addHotel,
};
