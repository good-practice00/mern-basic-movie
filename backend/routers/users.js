const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User(req.body);

  try {
    await newUser.save();
    res.status(201).json({ success: true, newUser });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send();
    }

    res.status(200).send(deletedUser);
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
