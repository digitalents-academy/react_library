const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

const bookRouter = require("./controllers/books");
app.use("/api/books", bookRouter);
const userRouter = require("./controllers/users");
app.use("/api/users", userRouter);
const loginRouter = require("./controllers/login");
app.use("/api/login", loginRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
