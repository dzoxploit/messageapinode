const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = req.user;

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
