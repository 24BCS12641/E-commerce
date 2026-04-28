const Order = require("../models/Order");
const generateInvoice = require("../utils/invoiceGenerated");
const calculatePrice = require("../utils/calculatePrice");

exports.createOrder = async (req, res) => {
  try {
    const pricing = calculatePrice(req.body.products);

    const order = await Order.create({
      userId: req.user.id,
      products: req.body.products,
      total: pricing.total,
      status: "Pending"
    });

    const invoice = generateInvoice(order);

    res.status(201).json({
      order,
      invoice
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id
    });

    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};