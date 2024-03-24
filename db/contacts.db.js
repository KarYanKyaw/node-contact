const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  username: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
});

const contacts = mongoose.model("contacts", contactSchema);

module.exports = contacts;
