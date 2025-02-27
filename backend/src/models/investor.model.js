const mongoose = require("mongoose");

const InvestorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    firm: { type: String, trim: true },
    investmentFocus: {
      type: String,
      enum: ["Tech", "Healthcare", "Finance", "E-commerce", "AI", "EdTech"],
      required: false,
    },
    fundingStagePreferred: {
      type: [{ type: String, enum: ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"] }],
      default: [],
    },
    ticketSize: { type: Number, required: false, min: 0 }, // Ensuring no negative investment amounts
    portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Startup", default: [] }], // Past investments
    interestedStartups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Startup", default: [] }], // Startups they saved
    contactInfo: {
      email: { type: String, required: true, unique: true, trim: true },
      linkedin: { type: String, trim: true },
    },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Investor", InvestorSchema);
