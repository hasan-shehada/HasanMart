const path = require("path");

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/public";
const products = require(path.join(__dirname, "../data/products.json"));

// Function to convert image paths to full URLs
const resolveImagePaths = (product) => ({
  ...product,
  images: product.images.map((image) =>
    image.includes("${BASE_URL}")
      ? image.replace("${BASE_URL}", BASE_URL)
      : `${BASE_URL}/uploads/${image}`
  ),
});

// Get all products
exports.getAllProducts = (req, res) => {
  res.json(products.map(resolveImagePaths));
};

// Get a specific product by ID
exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(resolveImagePaths(product));
};

// Get products by category
exports.getProductsByCategory = (req, res) => {
  const category = req.params.category.toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  if (filteredProducts.length === 0) {
    return res
      .status(404)
      .json({ message: "No products found in this category" });
  }

  res.json(filteredProducts.map(resolveImagePaths));
};

// Get all unique product categories
exports.getCategories = (req, res) => {
  const categories = [...new Set(products.map((product) => product.category))];
  res.json(categories);
};
