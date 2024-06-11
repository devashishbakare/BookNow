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
module.exports = router;
