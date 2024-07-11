const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authenticate = require("../config/authMiddleware");
router.get("/history", authenticate, userController.fetchBookingHistory);
router.get("/userDetails", authenticate, userController.fetchUserDetails);
router.get("/currentBooking", authenticate, userController.fetchCurrentBooking);
router.get(
  "/bookingDetails/:bookingId",
  authenticate,
  userController.fetchBookingDetails
);
router.delete(
  "/cancelBooking/:bookingId",
  authenticate,
  userController.cancelBooking
);
router.patch("/editProfile", authenticate, userController.updateProfileInfo);
module.exports = router;
