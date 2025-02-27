import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import Startup from "../models/Startup.js";
import Investor from "../models/Investor.js";

// Signup for Startup
const registerStartup = async (req, res) => {
  try {
    // Validate input
    await Promise.all([
      body("name").notEmpty().withMessage("Name is required").run(req),
      body("founder").notEmpty().withMessage("Founder is required").run(req),
      body("email").isEmail().withMessage("Invalid email format").run(req),
      body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters").run(req),
      body("industry").notEmpty().withMessage("Industry is required").run(req),
      body("fundingStage").notEmpty().withMessage("Funding stage is required").run(req),
      body("businessModel").notEmpty().withMessage("Business model is required").run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: "Validation failed", errors: errors.array() });

    const { name, founder, email, password, industry, fundingStage, businessModel } = req.body;

    // Check if email is already registered
    const existingStartup = await Startup.findOne({ email });
    if (existingStartup) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Startup
    const startup = new Startup({ name, founder, email, password: hashedPassword, industry, fundingStage, businessModel });

    await startup.save();
    res.status(201).json({ message: "Startup registered successfully", startupId: startup._id });

  } catch (error) {
    console.error("Error registering startup:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Signup for Investor
const registerInvestor = async (req, res) => {
  try {
    // Validate input
    await Promise.all([
      body("name").notEmpty().withMessage("Name is required").run(req),
      body("email").isEmail().withMessage("Invalid email format").run(req),
      body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters").run(req),
      body("investmentStage").notEmpty().withMessage("Investment stage is required").run(req),
      body("interestedIndustries").isArray({ min: 1 }).withMessage("At least one industry must be selected").run(req),
    ]);

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: "Validation failed", errors: errors.array() });

    const { name, email, password, investmentStage, interestedIndustries } = req.body;

    // Check if email is already registered
    const existingInvestor = await Investor.findOne({ email });
    if (existingInvestor) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Investor
    const investor = new Investor({ name, email, password: hashedPassword, investmentStage, interestedIndustries });

    await investor.save();
    res.status(201).json({ message: "Investor registered successfully", investorId: investor._id });

  } catch (error) {
    console.error("Error registering investor:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default { registerStartup, registerInvestor };
