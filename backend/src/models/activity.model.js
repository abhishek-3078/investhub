const mongoose = require("mongoose");
const ActivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Who performed the action
    userType: { type: String, enum: ["Startup", "Investor"], required: true }, // Startup or Investor
    action: { type: String, enum: ["Profile View", "Message Sent", "Investment Made", "Startup Saved"], required: true }, // What action was taken
    targetId: { type: mongoose.Schema.Types.ObjectId }, // On whom the action was taken (startup/investor ID)
    timestamp: { type: Date, default: Date.now } // When the action happened
  });
  
  module.exports = mongoose.model("Activity", ActivitySchema);
  