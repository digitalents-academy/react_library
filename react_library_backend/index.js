const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MONGODB_URI;
console.log(process.env.PORT);
mongoose.connect(mongoUrl);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
