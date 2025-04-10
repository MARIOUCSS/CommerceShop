const bcrypt = require("bcrypt");
const hashpass = async (password) => {
  try {
    const saltRound = 10;
    const haspassword = await bcrypt.hash(password, saltRound);
    return haspassword;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  hashpass,
};
