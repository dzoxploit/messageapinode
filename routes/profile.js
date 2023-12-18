const express = require("express");
const authMiddleware = require("../middleware/auth");
const profileController = require("../controllers/profileController");
const router = express.Router();

router.patch("/update", authMiddleware, profileController.updateProfile);

module.exports = router;
