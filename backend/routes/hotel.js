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

/**
 * @swagger
 * /hotel:
 *   get:
 *     summary: Fetch hotel data by hotel ID
 *     tags: [Hotel]
 *     parameters:
 *       - in: query
 *         name: hotelId
 *         required: true
 *         description: The ID of the hotel to fetch data for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with hotel data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: Hotel data.
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The ID of the hotel.
 *                     cityName:
 *                       type: string
 *                       description: The name of the city where the hotel is located.
 *                     backgroundImage:
 *                       type: array
 *                       items:
 *                         type: string
 *                         description: URL pointing to an image used as a background image.
 *                       description: An array of URLs pointing to images used as background images.
 *                     name:
 *                       type: string
 *                       description: The name of the hotel.
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                         description: URL pointing to an image of the hotel.
 *                       description: An array of URLs pointing to images of the hotel.
 *                     address:
 *                       type: string
 *                       description: The address of the hotel.
 *                     description:
 *                       type: string
 *                       description: Description of the hotel.
 *                     map:
 *                       type: string
 *                       description: URL of the map to locate the hotel.
 *                     facilities:
 *                       type: array
 *                       items:
 *                         type: boolean
 *                         description: Boolean flags for facilities added in hotel rooms.
 *                       description: Facilities added in hotel rooms.
 *                     rating:
 *                       type: number
 *                       description: The rating of the hotel.
 *                     roomPackages:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: The ID of the room package.
 *                           roomType:
 *                             type: string
 *                             description: The type of the room.
 *                           numberOfPeopleAllowed:
 *                             type: number
 *                             description: The number of people allowed in the room.
 *                           numberOfBeds:
 *                             type: number
 *                             description: The number of beds in the room.
 *                           numberOfBathrooms:
 *                             type: number
 *                             description: The number of bathrooms in the room.
 *                           mealsIncluded:
 *                             type: boolean
 *                             description: Whether meals are included in the room package.
 *                           price:
 *                             type: number
 *                             description: The price of the room package.
 *                       description: List of room packages offered by the hotel.
 *                     reviews:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: The ID of the review.
 *                           name:
 *                             type: string
 *                             description: The name of the reviewer.
 *                           rating:
 *                             type: number
 *                             description: The rating given in the review.
 *                           reviewText:
 *                             type: string
 *                             description: The text of the review.
 *                           date:
 *                             type: string
 *                             format: date-time
 *                             description: The date of the review.
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             description: The creation date of the review.
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             description: The last update date of the review.
 *                       description: List of reviews for the hotel.
 *                     host:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           description: The ID of the host.
 *                         name:
 *                           type: string
 *                           description: The name of the host.
 *                         joinDate:
 *                           type: string
 *                           format: date-time
 *                           description: The join date of the host.
 *                         phoneNumber:
 *                           type: string
 *                           description: The phone number of the host.
 *                       description: Details of the host of the hotel.
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of fetching the hotel data.
 *       400:
 *         description: Bad request. Hotel ID is missing in the query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the hotel ID is missing.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that something went wrong while fetching the hotel data.
 */

router.get("/", hotelController.getHotelData);
/**
 * @swagger
 * /hotel/search:
 *   get:
 *     summary: Fetch search results based on a key
 *     tags: [Hotel]
 *     parameters:
 *       - in: query
 *         name: key
 *         required: true
 *         description: The search key to search for hotels by city name or hotel name.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with search results.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: List of search results.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The ID of the hotel.
 *                       image:
 *                         type: string
 *                         description: URL of the first image of the hotel.
 *                       hotelName:
 *                         type: string
 *                         description: The name of the hotel.
 *                 message:
 *                   type: string
 *                   description: A message indicating the success of the search.
 *       400:
 *         description: Bad request. Search key not found in the query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that the search key was not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating that something went wrong while fetching the search result.
 */

router.get("/search", hotelController.fetchSearchResult);
module.exports = router;
