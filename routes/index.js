const express = require("express");
const authRoutes = require("./auth");
const profileRoutes = require("./profile");
const playerRoutes = require("./player");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/players", playerRoutes);

module.exports = router;
