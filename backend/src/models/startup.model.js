const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    founder: { type: String, required: true, trim: true },
    industry: { type: String, required: true, trim: true },
    fundingStage: {
      type: String,
      enum: ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"],
      required: true,
    },
    businessModel: {
      type: String,
      enum: ["B2B", "B2C", "D2C"],
      required: true,
    },
    pitchDeck: { type: String, trim: true }, // URL to the pitch deck
    website: { type: String, unique: true, sparse: true, trim: true }, // Unique but optional
    traction: { type: Number, default: 0, min: 0 }, // Prevent negative values
    fundingRequired: { type: Number, min: 0 }, // No negative funding
    description: { type: String, trim: true },
    investorsEngaged: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Investor", default: [] },
    ], // Investors interested
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true },

    // Newly Added Optional Attributes
    startupLocation: { type: String, trim: true },
    mobileNo: { type: String, match: /^[0-9]{10}$/ }, // Ensuring only digits (10-digit mobile)
    monthlyRevenue: { type: Number, min: 0 },
    fundsRaised: { type: Number, min: 0 },
    noOfCustomers: { type: Number, min: 0 },

    pitch: {
      problem: { type: String, trim: true },
      solution: { type: String, trim: true },
      opportunities: { type: String, trim: true },
      businessModel: { type: String, trim: true },
    },

    quarterlyRevenue: {
      quarter1: { type: Number, min: 0 },
      quarter2: { type: Number, min: 0 },
      quarter3: { type: Number, min: 0 },
      quarter4: { type: Number, min: 0 },
    },

    ceo: {
      name: { type: String, trim: true },
      experience: { type: String, trim: true },
      photo: { type: String, trim: true }, // URL or file reference
    },

    cto: {
      name: { type: String, trim: true },
      experience: { type: String, trim: true },
      photo: { type: String, trim: true }, // URL or file reference
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

module.exports = mongoose.model("Startup", StartupSchema);
