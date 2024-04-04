const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
const loginController = require("../controller/loginController");
router.get("/", homeController.testAPI);
router.post("/signUp", loginController.signUp);
router.post("/signIn", loginController.signIn);
module.exports = router;
