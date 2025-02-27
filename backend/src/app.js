const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api", routes);
app.use("/api/", require("./routes/authRoutes"));

module.exports = app; // Export the app (without starting the server)
