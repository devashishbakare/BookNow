const express = require("express");
const router = express.Router();
const authenticate = require("../config/authMiddleware");
const paymentController = require("../controller/paymentController");

router.post("/createBooking", authenticate, paymentController.createBooking);
router.post("/verify", paymentController.verifyBooking);

module.exports = router;
