const express = require("express");
const router = express.Router();
const hotelController = require("../controller/hotelController");

router.get("/fetchReview", hotelController.getHotelReview);

/**
 * @swagger
 * /host/rating:
 *   post:
 *     summary: fetching hotel rating
 *     tags: [Hotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotelName:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: successful fetch hotel average rating
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: hotel average rating
 *                 data:
 *                   type: number
 *                   description: hotel average rating
 *                 hostSchema:
 *                   $ref: './model/review.js'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: input data is not sufficient
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: something went wrong
 */

router.post("/rating", hotelController.getRating);

/**
 * @swagger
 * /host/addHotel:
 *   post:
 *     summary: add hotel in db
 *     tags: [Hotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 description: The name of the city where the accommodation is located.
 *               backgroundImage:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: URL pointing to an image used as a background image.
 *                 description: An array of URLs pointing to images used as background images.
 *               name:
 *                 type: string
 *                 description: The name of the accommodation.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: URL pointing to an image of the accommodation.
 *                 description: An array of URLs pointing to images of the accommodation.
 *               address:
 *                 type: string
 *                 description: The address of the accommodation.
 *               description:
 *                 type: string
 *                 description: Description for the hotel.
 *               map:
 *                 type: string
 *                 description: URL of the map to locate the hotel.
 *               facilities:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Facilities added in hotel room.
 *                 description: Facilities added in hotel room.
 *               rating:
 *                 type: number
 *                 description: Hotel rating, calculated from reviews.
 *               roomPackages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Object ID of hotel's package documents representing information about hotel rooms.
 *                 description: List of object IDs of room packages that hotel can offer.
 *               reviews:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Object ID of reviews for this hotel.
 *                 description: List of object IDs of reviews for this hotel.
 *               host:
 *                 type: string
 *                 description: Object ID of host document.
 *     responses:
 *       200:
 *         description: Successful fetch hotel average rating
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Hotel added successfully message.
 *                 data:
 *                   type: object
 *                   description: Hotel document that has all the data.
 *                 hotelSchema:
 *                   $ref: './model/hotel.js'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Input data is not sufficient.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Something went wrong while adding hotel data.
 */

router.post("/addHotel", hotelController.addHotel);

/**
 * @swagger
 * /hotel/city/{cityName}:
 *   get:
 *     summary: Get hotels in a specific city
 *     tags: [Hotel]
 *     parameters:
 *       - in: path
 *         name: cityName
 *         required: true
 *         description: The name of the city to search for hotels.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with hotels in the specified city
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 description: The name of the city where the accommodation is located.
 *               backgroundImage:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: URL pointing to an image used as a background image.
 *                 description: An array of URLs pointing to images used as background images.
 *               name:
 *                 type: string
 *                 description: The name of the accommodation.
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: URL pointing to an image of the accommodation.
 *                 description: An array of URLs pointing to images of the accommodation.
 *               address:
 *                 type: string
 *                 description: The address of the accommodation.
 *               description:
 *                 type: string
 *                 description: Description for the hotel.
 *               map:
 *                 type: string
 *                 description: URL of the map to locate the hotel.
 *               facilities:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Facilities added in hotel room.
 *                 description: Facilities added in hotel room.
 *               rating:
 *                 type: number
 *                 description: Hotel rating, calculated from reviews.
 *               roomPackages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Object ID of hotel's package documents representing information about hotel rooms.
 *                 description: List of object IDs of room packages that hotel can offer.
 *               reviews:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: Object ID of reviews for this hotel.
 *                 description: List of object IDs of reviews for this hotel.
 *               host:
 *                 type: string
 *                 description: Object ID of host document.
 *
 *       400:
 *         description: Bad request. cityName parameter is missing or invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: cityName parameter is missing or invalid.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Something went wrong while processing the request.
 */

router.get("/city/:cityName", hotelController.getCityHotel);
// todo : here you need to add swagger code
router.get("/", hotelController.getHotelData);
router.get("/search", hotelController.fetchSearchResult);
module.exports = router;
