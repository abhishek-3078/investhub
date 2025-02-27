const http = require("http");
const app = require("./app.js"); // Import the app
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

// Create and start the HTTP server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
