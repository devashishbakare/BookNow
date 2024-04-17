const express = require("express");
const router = express.Router();
const hostController = require("../controller/hostController");
/**
 * @swagger
 * /host/add:
 *   post:
 *     summary: Register host
 *     tags: [Host]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               joinDate :
 *                 type : date
 *               phone_number:
 *                 type: string
 *     responses:
 *       200:
 *         description: host registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: host added successfully
 *                 data:
 *                   type: string
 *                   description: object id of document
 *                 hostSchema:
 *                   $ref: './model/hotelHost.js'
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
 *       409:
 *         description: conflict in input details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: host already exist
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

router.post("/add", hostController.addHost);
module.exports = router;
