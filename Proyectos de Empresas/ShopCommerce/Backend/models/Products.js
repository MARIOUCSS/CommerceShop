const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Array, require: true },
  category: { type: String, require: true },
  subcategory: { type: String, require: true },
  sizes: { type: Array, require: true },
  popular: { type: Boolean },
  data: { type: Number, require: true },
});

module.exports = mongoose.model("Product", ProductSchema);
