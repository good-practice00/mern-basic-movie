const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.post("/movies", async (req, res) => {
  const { title, genre, year } = req.body;
  const newMovie = new Movie(req.body);

  try {
    await newMovie.save();
    res.status(201).json({ success: true, newMovie });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.delete("/movies/:id", async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).send();
    }

    res.status(200).send(deletedMovie);
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
