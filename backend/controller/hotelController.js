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

const getCityHotel = async (req, res) => {
  try {
    const cityName = req.params.cityName;
    const regex = new RegExp("^" + cityName + "$", "i");
    if (!cityName) {
      return res.status(400).json({ message: "params missing" });
    }
    const cityHotel = await Hotel.find({ cityName: regex });
    return res
      .status(200)
      .json({ data: cityHotel, message: "list of city hotels" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong which fetching city hotels" });
  }
};

const getHotelData = async (req, res) => {
  try {
    const hotelId = req.query.hotelId;
    //console.log(hotelId);
    if (!hotelId) {
      return res.status(400).json({ message: "input is missing" });
    }

    const hotelData = await Hotel.findById(hotelId)
      .populate("host")
      .populate("roomPackages")
      .populate("reviews")
      .exec();

    return res.status(200).json({ data: hotelData, message: "hotel data" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while sending data" });
  }
};

const fetchSearchResult = async (req, res) => {
  try {
    const searchKey = req.query.key;
    if (!searchKey) {
      return res.status(400).json({ message: "search key not found" });
    }

    const searchWords = searchKey.split(" ");
    const regexPatterns = searchWords.map((word) => new RegExp(word, "i"));
    const searchFor = {
      $or: [{ cityName: regexPatterns }, { name: regexPatterns }],
    };

    const result = await Hotel.find(searchFor);
    const searchResult = result.map((data) => {
      return {
        id: data._id,
        image: data.images[0],
        hotelName: data.name,
      };
    });

    return res.status(200).json({
      data: searchResult,
      message: "Search Result",
      regex: searchWords,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while fetching result" });
  }
};

const bookHotel = async (req, res) => {
  try {
    // console.log(req.userId);
    // console.log(req.body);
    return res.status(200).json({ message: "request processed" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while booking hotel" });
  }
};

module.exports = {
  confirmBooking,
  deleteAllDocuments,
  addHotelPackage,
  getHotelReview,
  getRating,
  addHotel,
  getCityHotel,
  getHotelData,
  fetchSearchResult,
  bookHotel,
};
