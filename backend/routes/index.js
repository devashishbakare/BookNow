const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
const hotelController = require("../controller/hotelController");
router.get("/", homeController.testAPI);
router.post("/confirmBooking", hotelController.confirmBooking);
router.delete("/deleteBooking", hotelController.deleteAllDocuments);
module.exports = router;
