const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { validateDataRegister } = require("../validateData");

router.post("/", async (req, res) => {

  const { error } = validateDataRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userEmail = await User.findOne({ email: req.body.email }); 
  if (userEmail) return res.status(400).send("Email already used");


  const salt = await bcrypt.genSalt(10); 
  const hashPassword = await bcrypt.hash(req.body.senha, salt); 

  const user = new User({
    nome: req.body.nome,
    email: req.body.email,
    senha: hashPassword,
  })
  
    try{
      const salvarUser = await user.save(); 
      res.send('Registered user');
    } catch (err) {
      res.status(400).send(err);
    }
  
  
});

module.exports = router;
