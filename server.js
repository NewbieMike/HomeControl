require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "build")));

// Route all requests to the React app's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
