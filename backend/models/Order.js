const mongoose = require("mongoose");

const orderSchema =
new mongoose.Schema({

 user:{
  type:String,
  required:true
 },

 items:[
  {
   name:String,
   price:Number,
   image:String
  }
 ],

 totalPrice:{
  type:Number,
  required:true
 },

 paymentMethod:{
  type:String,
  required:true
 },

 shippingAddress:{
  type:String,
  required:true
 }

},{
 timestamps:true
});

module.exports =
mongoose.model(
 "Order",
 orderSchema
);