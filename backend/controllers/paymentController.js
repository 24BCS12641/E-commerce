exports.processPayment = async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Payment route ready"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};