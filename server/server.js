// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://localhost:27017/cctv_website"; // Replace with your MongoDB connection string

app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Define your MongoDB schema and models for CCTV products if needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
