const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./src/config/db.js");

const bodyParser = require("body-parser");
const routes = require("./src/routes/cardRoutes.js");
const PORT = process.env.PORT || 4500;

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server has started!");
});
