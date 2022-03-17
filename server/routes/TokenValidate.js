const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const validate = jwt.verify(req.body.token, process.env.JWT_SECRET); 
    req.user = validate.id;
    next(); 
  } catch {
    res.status(400).send("Invalid Token");
  }
};
