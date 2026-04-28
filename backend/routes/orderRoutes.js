const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const PDFDocument = require("pdfkit");


// CREATE ORDER
router.post("/", async (req,res)=>{

 try{

  const order =
   await Order.create(req.body);

  res.status(201).json(order);

 }catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});


// GET ORDERS
router.get("/", async(req,res)=>{

 try{

  const orders =
   await Order.find()
   .sort({createdAt:-1});

  res.json(orders);

 }catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});


// DELETE ORDER
router.delete("/:id", async(req,res)=>{

 try{

  await Order.findByIdAndDelete(
   req.params.id
  );

  res.json({
   message:"Order Cancelled"
  });

 }catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});


// PREMIUM INVOICE
router.get("/invoice/:id", async(req,res)=>{

 try{

  const order =
   await Order.findById(
    req.params.id
   );

  if(!order){
   return res.status(404).json({
    message:"Order not found"
   });
  }

  const doc =
   new PDFDocument({
    margin:40
   });

  res.setHeader(
   "Content-Type",
   "application/pdf"
  );

  res.setHeader(
   "Content-Disposition",
   `attachment; filename=invoice-${order._id}.pdf`
  );

  doc.pipe(res);

  doc.rect(0,0,700,90)
  .fill("#111827");

  doc.fillColor("white")
  .fontSize(28)
  .text("SHOPZONE",40,30);

  doc.fontSize(12)
  .text(
   "Premium Marketplace Invoice",
   40,
   62
  );

  doc.fillColor("black");

  doc.moveDown(4);

  doc.fontSize(18)
  .text("Invoice Details");

  doc.moveDown();

  doc.fontSize(12)
  .text(`Invoice No: ${order._id}`);

  doc.text(
   `Date: ${new Date(order.createdAt).toLocaleDateString()}`
  );

  doc.text(
   `Customer: ${order.user}`
  );

  doc.text(
   `Payment: ${order.paymentMethod}`
  );

  doc.text(
   `Address: ${order.shippingAddress}`
  );

  doc.moveDown(2);

  doc.rect(40,260,520,28)
  .fill("#e5e7eb");

  doc.fillColor("black")
  .text("Item",50,270);

  doc.text("Price",420,270);

  let y = 300;

  order.items.forEach(item=>{

   doc.text(item.name,50,y);

   doc.text(
    `₹${item.price}`,
    420,
    y
   );

   y += 28;

  });

  doc.rect(350,y+20,210,70)
  .fill("#f3f4f6");

  doc.fillColor("black")
  .fontSize(14)
  .text(
   `Subtotal: ₹${order.totalPrice}`,
   370,
   y+35
  );

  doc.fontSize(18)
  .text(
   `Total: ₹${order.totalPrice}`,
   370,
   y+58
  );

  doc.fontSize(11)
  .fillColor("gray")
  .text(
   "Thank you for shopping with ShopZone.",
   40,
   730,
   {align:"center"}
  );

  doc.end();

 }catch(error){

  res.status(500).json({
   message:error.message
  });

 }

});

module.exports = router;