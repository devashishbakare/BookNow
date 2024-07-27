const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authenticate = require("../config/authMiddleware");

/**
 * @swagger
 * /user/history:
 *   get:
 *     summary: Fetch booking history
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Booking history fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       bookingDetails:
 *                         type: object
 *                         properties:
 *                           bookingId:
 *                             type: number
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: John Doe
 *                           email:
 *                             type: string
 *                             example: johndoe@gmail.com
 *                           phoneNumber:
 *                             type: string
 *                             example: 9876543210
 *                           additionalContactInformation:
 *                             type: string
 *                             example: "None"
 *                           hotelName:
 *                             type: string
 *                             example: Novotel Pune Viman Nagar Road
 *                           hotelId:
 *                             type: string
 *                             example: 661f6f36f25dc8cba19aefcc
 *                           selectedDates:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 month:
 *                                   type: number
 *                                   example: 5
 *                                 dates:
 *                                   type: array
 *                                   items:
 *                                     type: number
 *                                   example: [25]
 *                           totalAmount:
 *                             type: string
 *                             example: 2999
 *                           paymentMethod:
 *                             type: string
 *                             example: Pay On Arrival
 *                           roomPackage:
 *                             type: string
 *                             example: 661e08da50e4a5aeee946958
 *                       hotelImage:
 *                         type: string
 *                         example: http://example.com/image.jpg
 *                   description: An array of booking details objects with associated hotel images
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

router.get("/history", authenticate, userController.fetchBookingHistory);
router.get("/userDetails", authenticate, userController.fetchUserDetails);

/**
 * @swagger
 * /user/currentBooking:
 *   get:
 *     summary: Fetch current bookings
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current bookings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       bookingDetails:
 *                         type: object
 *                         properties:
 *                           bookingId:
 *                             type: number
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: John Doe
 *                           email:
 *                             type: string
 *                             example: johndoe@gmail.com
 *                           phoneNumber:
 *                             type: string
 *                             example: 9876543210
 *                           additionalContactInformation:
 *                             type: string
 *                             example: "None"
 *                           hotelName:
 *                             type: string
 *                             example: Novotel Pune Viman Nagar Road
 *                           hotelId:
 *                             type: string
 *                             example: 661f6f36f25dc8cba19aefcc
 *                           selectedDates:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 month:
 *                                   type: number
 *                                   example: 5
 *                                 dates:
 *                                   type: array
 *                                   items:
 *                                     type: number
 *                                   example: [25]
 *                           totalAmount:
 *                             type: string
 *                             example: 2999
 *                           paymentMethod:
 *                             type: string
 *                             example: Pay On Arrival
 *                           roomPackage:
 *                             type: string
 *                             example: 661e08da50e4a5aeee946958
 *                       hotelImage:
 *                         type: string
 *                         example: http://example.com/image.jpg
 *                   description: An array of current booking details objects with associated hotel images
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

router.get("/currentBooking", authenticate, userController.fetchCurrentBooking);

/**
 * @swagger
 * /user/bookingDetails/{bookingId}:
 *   get:
 *     summary: Fetch booking details by booking ID
 *     tags: [User]
 *     parameters:
 *       - name: bookingId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the booking to fetch
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Booking details fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     bookingDetails:
 *                       type: object
 *                       properties:
 *                         bookingId:
 *                           type: number
 *                           example: 1
 *                         name:
 *                           type: string
 *                           example: John Doe
 *                         email:
 *                           type: string
 *                           example: johndoe@gmail.com
 *                         phoneNumber:
 *                           type: string
 *                           example: 9876543210
 *                         additionalContactInformation:
 *                           type: string
 *                           example: "None"
 *                         hotelName:
 *                           type: string
 *                           example: Novotel Pune Viman Nagar Road
 *                         hotelId:
 *                           type: string
 *                           example: 661f6f36f25dc8cba19aefcc
 *                         selectedDates:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               month:
 *                                 type: number
 *                                 example: 5
 *                               dates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [25]
 *                         totalAmount:
 *                           type: string
 *                           example: 2999
 *                         paymentMethod:
 *                           type: string
 *                           example: Pay On Arrival
 *                         roomPackage:
 *                           type: string
 *                           example: 661e08da50e4a5aeee946958
 *                     roomType:
 *                       type: string
 *                       example: Deluxe Suite
 *                   description: The booking details object with associated room type
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. Booking not found or user not authorized.
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

router.get(
  "/bookingDetails/:bookingId",
  authenticate,
  userController.fetchBookingDetails
);
/**
 * @swagger
 * /user/cancelBooking/{bookingId}:
 *   delete:
 *     summary: Cancel a booking by booking ID
 *     tags: [User]
 *     parameters:
 *       - name: bookingId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the booking to cancel
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Booking canceled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       400:
 *         description: Bad request. Booking details, user, or hotel not found.
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
  "/cancelBooking/:bookingId",
  authenticate,
  userController.cancelBooking
);

/**
 * @swagger
 * /user/editProfile:
 *   patch:
 *     summary: Update user profile information
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name of the user
 *               email:
 *                 type: string
 *                 description: New email address of the user
 *               phone_number:
 *                 type: string
 *                 description: New phone number of the user
 *               password:
 *                 type: string
 *                 description: New password for the user
 *             required:
 *               - name
 *               - email
 *               - phone_number
 *               - password
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       description: New JWT token for the user
 *                     userDetails:
 *                       type: object
 *                       $ref: '#/components/schemas/User'
 *                   description: Contains the updated user details and token
 *                 message:
 *                   type: string
 *                   description: Success message
 *       404:
 *         description: User not found
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

router.patch("/editProfile", authenticate, userController.updateProfileInfo);
module.exports = router;
