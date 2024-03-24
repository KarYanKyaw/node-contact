const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  created_at: { type: Date, default: Date.now },
});

const user = mongoose.model("users", userSchema);

module.exports = user;
