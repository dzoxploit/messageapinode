const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");

app.use(bodyParser.json());
app.use("/api", routes); // Prefix routes with /api

module.exports = app;
