const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = 3003;
app.use(cors());

dotenv.config();

mongoose.connect(
  process.env.DB_URL,
  console.log("Conectado ao Banco de dados")
);
app.use(express.json());

app.listen(PORT, () => console.log("Servidor Online"));
