const generateInvoice = (order) => {
  return {
    invoiceNumber: "INV-" + Date.now(),
    orderId: order._id,
    customerId: order.userId,
    items: order.products,
    totalAmount: order.total,
    status: order.status || "Pending",
    createdAt: new Date()
  };
};

module.exports = generateInvoice;