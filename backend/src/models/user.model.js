const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true }, // Firebase UID
  email: { type: String, required: true, unique: true },
  name: { type: String },
  userType: { type: String, enum: ["Investor", "Startup"], required: true },
  profileCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
