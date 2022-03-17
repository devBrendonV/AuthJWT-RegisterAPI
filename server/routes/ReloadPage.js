const router = require("express").Router();
const User = require("../model/User");
const TokenValidate = require('./TokenValidate')

router.post("/", TokenValidate, async (req, res,next) => {
  try {
    const user = await User.findOne({ _id: req.user });
    res.send({ name: user.name, email: user.email });
    next(); 
  } catch {
    res.status(400).send("Invalid Token");
  }

});

module.exports = router;
