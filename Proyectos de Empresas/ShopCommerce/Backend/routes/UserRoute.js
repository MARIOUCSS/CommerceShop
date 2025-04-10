const express = require("express");
const { Createuser } = require("../Controllers/Usercontrollers");
const router = express.Router();
router.post("/registeruser", Createuser);
module.exports = router;
