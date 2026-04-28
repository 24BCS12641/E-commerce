const generateOrderId = () => {
  return "ORD-" + Math.floor(Math.random() * 1000000);
};

module.exports = generateOrderId;