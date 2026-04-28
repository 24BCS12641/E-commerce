const calculatePrice = (items) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = subtotal * 0.18;
  const shipping = subtotal > 1000 ? 0 : 100;
  const total = subtotal + tax + shipping;

  return {
    subtotal,
    tax,
    shipping,
    total
  };
};

module.exports = calculatePrice;