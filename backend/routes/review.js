const express = require("express");
const router = express.Router();
const reviewCountroller = require("../controller/reviewController");
// todo : here you need to authenticate this user, whoever adding the review
router.post("/addAll", reviewCountroller.addReview);
module.exports = router;
