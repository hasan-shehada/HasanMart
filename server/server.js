require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://hasanmart.pages.dev",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  "/public",
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, filePath) => {
      const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
      if (imageExtensions.some((ext) => filePath.endsWith(ext))) {
        res.setHeader("Access-Control-Allow-Origin", "*");
      }
    },
  })
);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is up and running!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
