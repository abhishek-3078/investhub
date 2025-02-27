const mongoose = require("mongoose");
const MatchSchema = new mongoose.Schema({
    investorId: { type: mongoose.Schema.Types.ObjectId, ref: "Investor", required: true },
    startupId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup", required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    engagementScore: { type: Number, default: 0 }, // AI-based matching score
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Match", MatchSchema);
  