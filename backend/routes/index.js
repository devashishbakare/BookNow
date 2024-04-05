const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
const loginController = require("../controller/loginController");
router.get("/", homeController.testAPI);

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
module.exports = router;
