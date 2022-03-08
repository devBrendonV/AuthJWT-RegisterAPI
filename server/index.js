const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 3003;
app.use(cors());

dotenv.config();
// Routes
const register = require('./routes/UserRegister')
const login = require('./routes/UserLogin')

mongoose.connect(
  process.env.DB_URL,
  console.log("Connected on Mongoose")
);
app.use(express.json());
app.use('/api/register', register)
app.use('/api/login',login)

app.listen(PORT, () => console.log("Server On"));
