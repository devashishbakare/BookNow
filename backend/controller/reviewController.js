const Review = require("../model/review");
const addReview = async (req, res) => {
  const reviewData = req.body;
  try {
    const reviews = Promise.all(
      reviewData.map(
        async (reviewDetails) => await Review.create(reviewDetails)
      )
    );
    return res.status(201).json({ message: "review added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
module.exports = {
  addReview,
};
