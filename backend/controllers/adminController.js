const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

exports.getDashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    res.json({
      users,
      products,
      orders
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};