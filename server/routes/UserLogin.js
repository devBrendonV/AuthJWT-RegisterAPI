const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(302).send("Email not found");

  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validatePassword) return res.status(303).send("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.header("auth-token", token).send({ token: token });
});

module.exports = router;
