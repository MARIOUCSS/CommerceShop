const { hashpass } = require("../config/Authohelper");
const usermodel = require("../models/User");
const JWT = require("jsonwebtoken");

const Createuser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }
  try {
    const ExistingUser = await usermodel.findOne({ email });
    if (ExistingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered",
      });
    }
    const hashpassword = await hashpass(password);
    const NewUser = new usermodel({
      name,
      email,
      password: hashpassword,
    });
    const User = await NewUser.save();
    const Token = JWT.sign(
      {
        _id: User._id,
        name: User.name,
        email: User.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      Tokens: Token,
    });
  } catch (error) {
    console.error("📍 Error en:", error.stack);
  }
};
module.exports = {
  Createuser,
};
