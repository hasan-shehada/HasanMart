require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS to allow cross-origin requests
app.use(cors());

// Serve static files from the "public" directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Import and use product routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Root route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is up and running!!!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} !!!`);
});
