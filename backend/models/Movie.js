const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  genre: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: String,
    trim: true,
    required: true,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
