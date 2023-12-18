const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

const configureExpress = () => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(cors()); // Enable CORS for all routes

  // Routes
  app.use("/api", routes); // Prefix routes with /api

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  });

  return app;
};

module.exports = configureExpress;
