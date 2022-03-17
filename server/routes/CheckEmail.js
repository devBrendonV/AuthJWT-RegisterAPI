const router = require("express").Router();
const User = require("../model/User");

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Email Already Used");
});

module.exports = router;
