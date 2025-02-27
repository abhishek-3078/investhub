const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }
    // Verify token
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

    req.user = decoded.id; // Attach decoded user data to request object
    next(); // Proceed to the next middleware/controller

  } catch (error) {
    console.error("JWT Authentication Error:", error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports=authMiddleware;
