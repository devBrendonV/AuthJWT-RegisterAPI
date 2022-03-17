const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res, next) => {
  const userEmail = await User.findOne({ email: req.body.email });
  if (userEmail) return res.status(400).send("Email already used");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const userSaving = await user.save();
    res.send("Registered user");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
