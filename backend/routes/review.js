const express = require("express");
const router = express.Router();
const reviewCountroller = require("../controller/reviewController");
const authenticate = require("../config/authMiddleware");
// todo : here you need to authenticate this user, whoever adding the review
router.post("/addAll", reviewCountroller.addAllReview);
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /review/add:
 *   post:
 *     summary: Add a new review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotelId:
 *                 type: string
 *                 description: ID of the hotel being reviewed
 *               rating:
 *                 type: number
 *                 description: Rating given by the user
 *               reviewText:
 *                 type: string
 *                 description: Text of the review
 *             required:
 *               - hotelId
 *               - rating
 *               - reviewText
 *     responses:
 *       201:
 *         description: New review has been added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   $ref: '#/model/review.js'
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. User or Hotel not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.post("/add", authenticate, reviewCountroller.addReview);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /review/edit:
 *   put:
 *     summary: Edit an existing review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reviewId:
 *                 type: string
 *                 description: ID of the review to be edited
 *               rating:
 *                 type: number
 *                 description: Updated rating
 *               reviewText:
 *                 type: string
 *                 description: Updated review text
 *             required:
 *               - reviewId
 *               - rating
 *               - reviewText
 *     responses:
 *       200:
 *         description: Review has been updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   $ref: '#/model/review.js'
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. User, Review, or Hotel not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.put("/edit", authenticate, reviewCountroller.editReview);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /review/delete/{reviewId}:
 *   delete:
 *     summary: Delete an existing review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the review to be deleted
 *     responses:
 *       200:
 *         description: Review has been deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/DeleteReviewResponse'
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. User, Review, or Hotel not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.delete(
  "/delete/:reviewId",
  authenticate,
  reviewCountroller.deleteReview
);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /review/fetch:
 *   get:
 *     summary: Fetch user reviews
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User reviews fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     $ref: '#/components/schemas/Review'
 *                   description: An array of reviews object
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. User not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.get("/fetch", authenticate, reviewCountroller.fetchReviews);
module.exports = router;
