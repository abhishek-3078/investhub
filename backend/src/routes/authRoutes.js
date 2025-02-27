const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const dotenv = require("dotenv");
const Startup = require("../models/startup.model.js");
const Investor = require("../models/investor.model.js");

dotenv.config(); // Load environment variables

const router = express.Router();

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id}, // Payload
    process.env.JWT_SECRET, // Secret Key
    { expiresIn: "7d" } // Expiration time
  );
};

const loginStartup= async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const startup = await Startup.findOne({ email: email.toLowerCase().trim() });
    if (!startup) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, startup.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = generateToken(startup);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in startup:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const loginInvestor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(email,password)
    const investor = await Investor.findOne({ contactInfo:{email: email.toLowerCase().trim()} });
    if (!investor) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, investor.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    console.log("hello")
    const token = generateToken(investor);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in investor:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
// Signup for Startup
const registerStartup = async (req, res) => {
  try {
    const { name, founder, email, password, industry, fundingStage, businessModel } = req.body;

    if (!name || !founder || !email || !password || !industry || !fundingStage || !businessModel) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingStartup = await Startup.findOne({ email: email.toLowerCase().trim() });
    if (existingStartup) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const startup = new Startup({
      name: name.trim(),
      founder: founder.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      industry,
      fundingStage,
      businessModel,
    });

    await startup.save();

    // Generate token
    const token = generateToken(startup);

    res.status(201).json({ message: "Startup registered successfully", token });
  } catch (error) {
    console.error("Error registering startup:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Signup for Investor
const registerInvestor = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingInvestor = await Investor.findOne({ email: email.toLowerCase().trim() });
    if (existingInvestor) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    const investor = new Investor({
      name: name.trim(),
      contactInfo:{email: email.toLowerCase().trim()},
      password: hashedPassword
    });  

    await investor.save();

    // Generate token
    const token = generateToken(investor);

    res.status(201).json({ message: "Investor registered successfully", token });
  } catch (error) {
    console.error("Error registering investor:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

router.post("/signup/startup", registerStartup);
router.post("/signup/investor", registerInvestor);
router.post("/login/startup", loginStartup);
router.post("/login/investor", loginInvestor);

module.exports = router;
