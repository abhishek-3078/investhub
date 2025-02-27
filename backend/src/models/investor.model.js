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
      type: [
        {
          type: String,
          enum: ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"],
        },
      ],
      default: [],
    },
    ticketSize: { type: Number, required: false, min: 0 }, // Ensuring no negative investment amounts
    portfolio: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Startup", default: [] },
    ], // Past investments
    interestedStartups: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Startup", default: [] },
    ], // Startups they saved
    contactInfo: {
      email: { type: String, required: true, unique: true, trim: true },
      linkedin: { type: String, trim: true },
      twitter: { type: String, trim: true },
      mobile: { type: String, trim: true },
      website: { type: String, trim: true },
    },
    password: { type: String, required: true },
    investorBio: { type: String, required: false, trim: true },
    investmentStrategy: { type: String, required: false, trim: true },
    totalInvestment: { type: Number, required: false, min: 0 },
    achievements: { type: [String], default: [] },
    recentInvestments: [
      {
        startupName: { type: String, required: false },
        industry: { type: String, required: false },
        year: { type: Number, required: false },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Investor", InvestorSchema);
