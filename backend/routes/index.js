const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
const loginController = require("../controller/loginController");
const hotelController = require("../controller/hotelController");

router.get("/", homeController.testAPI);
router.post("/addToQueue", homeController.addToEmailQueue);
router.use("/payment", require("./payments"));
router.use("/host", require("./host"));
router.use("/review", require("./review"));
router.use("/hotel", require("./hotel"));
/**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Register User with sign up form
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *               phone_number:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description : user register successfull message
 *                 data:
 *                   type: string
 *                   description : jwt token
 *                 userDetails :
 *                  type : object
 *                  description : user document for checking perpose
 *                 userSchema:
 *                   $ref: './model/userSchema.js'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.post("/signUp", loginController.signUp);

/**
 * @swagger
 * /signIn:
 *   post:
 *     summary: login user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: User registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description : user register successfull message
 *                 data:
 *                   type: string
 *                   description : jwt token
 *                 userDetails :
 *                  type : object
 *                  description : user document for checking perpose
 *                 userSchema:
 *                   $ref: './model/userSchema.js'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.post("/signIn", loginController.signIn);

/**
 * @swagger
 * /addPackage:
 *   post:
 *     summary: Room Packages for each hotels
 *     tags: [Room Package]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomType:
 *                 type: string
 *                 description: The type of room
 *               numberOfPeopleAllowed:
 *                 type: integer
 *                 description: Number of people allowed in a room
 *               numberOfBeds:
 *                 type: integer
 *                 description: The number of beds in the room
 *               numberOfBathrooms:
 *                 type: integer
 *                 description: The number of bathrooms in the room
 *               mealsIncluded:
 *                 type: boolean
 *                 description: Indicates whether meals are included
 *               price:
 *                 type: number
 *                 description: The price of the room
 *
 *     responses:
 *       201:
 *         description: Room Packages has been added successfull
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description : message for successfull creation of documents
 *                 data:
 *                   type: string
 *                   description : empty object
 *                 userSchema:
 *                   $ref: './model/roomPackage.js'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description : input object is missing
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description : General error
 */
router.post("/addPackage", hotelController.addHotelPackage);

module.exports = router;
