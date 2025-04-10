const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;
app.get("/", (req, res) => {
  res.send({
    message: "Hola",
  });
});
const User = require("./routes/UserRoute");
app.use("/apiu", User);
app.listen(port, () => {
  console.log(`servidor corriendo ${port}`);
});
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
