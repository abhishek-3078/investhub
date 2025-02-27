const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true, index: true },
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
    fundingRequired: { type: Number, required: false, min: 0 }, // No negative funding
    description: { type: String, trim: true },
    investorsEngaged: [{ type: mongoose.Schema.Types.ObjectId, ref: "Investor", default: [] }], // Investors interested
    email: { type: String, required: true, unique: true, trim: true, index: true },
    password: { type: String, required:true}
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

module.exports = mongoose.model("Startup", StartupSchema);
