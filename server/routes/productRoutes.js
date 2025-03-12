const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to get all products
router.get("/", productController.getAllProducts);

// Route to get a specific product by ID
router.get("/:id", productController.getProductById);

// Route to get all product categories
router.get("/categories", productController.getCategories);

// Route to get products by category
router.get("/category/:category", productController.getProductsByCategory);

module.exports = router;
