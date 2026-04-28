const Product = require("../models/Product");


// ==============================
// GET ALL PRODUCTS
// ==============================
exports.getProducts = async (req, res) => {
  try {

    const products =
      await Product.find()
      .sort({ createdAt: -1 });

    res.json(products);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
};


// ==============================
// GET SINGLE PRODUCT
// ==============================
exports.getProductById = async (req, res) => {
  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product"
    });
  }
};


// ==============================
// CREATE PRODUCT
// ==============================
exports.createProduct = async (req, res) => {
  try {

    const {
      name,
      price,
      image,
      category,
      description
    } = req.body;

    const product =
      await Product.create({
        name,
        price,
        image,
        category,
        description
      });

    res.status(201).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create product"
    });
  }
};


// ==============================
// UPDATE PRODUCT
// ==============================
exports.updateProduct = async (req, res) => {
  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    product.name =
      req.body.name || product.name;

    product.price =
      req.body.price || product.price;

    product.image =
      req.body.image || product.image;

    product.category =
      req.body.category ||
      product.category;

    product.description =
      req.body.description ||
      product.description;

    const updated =
      await product.save();

    res.json({
      message: "Product updated",
      product: updated
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update product"
    });
  }
};


// ==============================
// DELETE PRODUCT
// ==============================
exports.deleteProduct = async (req, res) => {
  try {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product"
    });
  }
};