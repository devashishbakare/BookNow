const express = require("express");
const router = express.Router();
const reviewCountroller = require("../controller/reviewController");
const authenticate = require("../config/authMiddleware");
// todo : here you need to authenticate this user, whoever adding the review
router.post("/addAll", reviewCountroller.addAllReview);
router.post("/add", authenticate, reviewCountroller.addReview);
router.put("/edit", authenticate, reviewCountroller.editReview);
router.delete(
  "/delete/:reviewId",
  authenticate,
  reviewCountroller.deleteReview
);
router.get("/fetch", authenticate, reviewCountroller.fetchReviews);
module.exports = router;
