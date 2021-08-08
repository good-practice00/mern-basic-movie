const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  // Check to see if password is modified. If it is, encrypt it. If not, execute next();
  if (!this.isModified("password")) {
    console.log("Does this run?");
    next();
  }
  console.log("Does this run as well?");
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
