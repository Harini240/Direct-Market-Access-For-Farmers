
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name:String,
  price:Number,
  quantity:String,
  farmer:String
});
module.exports = mongoose.model("product", productSchema);
