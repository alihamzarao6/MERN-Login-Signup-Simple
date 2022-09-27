let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is Already registered"],
  },
  password: {
    type: String,
    required: true,
  },
});

let User = new mongoose.model("User", userSchema);

module.exports = User;
