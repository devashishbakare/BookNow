const express = require("express");
const router = express.Router();
const authenticate = require("../config/authMiddleware");
const updateController = require("../controller/updateController");

router.put("/user", authenticate, updateController.updateUser);
router.delete("/bookingDetails", updateController.deleteBookingDetails);
router.delete("/review", updateController.deleteReview);
router.put("/hotel", updateController.updateHotel);
router.post("/updateReview", updateController.updateAddReview);
router.get("/test", updateController.testAPI);
router.put("/ratingScore", updateController.addRatingScore);
router.put("/updateHotelName/:userId", updateController.updateHotelName);
router.delete(
  "/cancelBookingRapair/:b1/:b2/:hotelId",
  authenticate,
  updateController.updateCancelBooking
);
module.exports = router;
