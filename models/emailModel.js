const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
  userId: {
    type: String,
    // required: [true, "User Id is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
