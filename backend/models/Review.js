const mongoose = require("mongoose");

module.exports = mongoose.model("Review",
 new mongoose.Schema({
   productId:String,
   userId:String,
   rating:Number,
   comment:String
 }, {timestamps:true})
);