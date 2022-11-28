const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB CONNECTED"))
    .catch(err => console.log("DB CONNECTION ERROR", err));

const bookRouter = require("./controllers/books");
app.use("/api/books", bookRouter);
    
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
