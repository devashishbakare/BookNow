const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authenticate = require("../config/authMiddleware");
router.get("/history", authenticate, userController.fetchBookingHistory);
router.get("/userDetails", authenticate, userController.fetchUserDetails);
router.get("/currentBooking", authenticate, userController.fetchCurrentBooking);
module.exports = router;
