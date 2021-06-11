const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Training = require("./models"); // access to models
const { db } = require("./models/training");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onlygainz", {
  useNewUrlParser: true,
});

// routes

// CRUD operations

// db.Onlygainz.create({ name: "Only Gainz" }) // when server runs it automatically creates database
//   .then((onlyGainz) => {
//     console.log(onlyGainz);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
