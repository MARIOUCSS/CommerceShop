const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  cartData: { type: Object, default: {} },
});
// {minimize:false}
module.exports = mongoose.model("User", UserSchema);
