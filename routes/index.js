const express = require("express");
const authRoutes = require("./auth");
const profileRoutes = require("./profile");
const messagesRoutes = require("./message");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/messages", messagesRoutes);

module.exports = router;
