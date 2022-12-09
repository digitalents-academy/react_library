const bcrypt = require("bcrypt");
const { request, response } = require("express");
const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.post("/", async (request, response) => {
  const { email, password, admin } = request.body;
  const existingUser = await User.findOne({ email });
  if (password.length < 4) {
    console.log("here");
    return response.status(400).json({
      error: "password must be at least 3 letters long",
    });
  }
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    email,
    passwordHash,
    admin: admin || false,
  });

  const savedUser = await user.save();
  console.log(savedUser);
  response.status(201).json(savedUser);
});

userRouter.get("/", async (request, response) => {
  console.log("asd");
  const users = await User.find({}).populate("loaned", {
    title: 1,
    author: 1,
  });
  console.log(users);
  response.json(users);
});

// Get user by ID
userRouter.get("/:id", async (request, response) => {
  const user = await User.findById(request.params.id);
  if (user) {
    response.json(user.toJSON());
  } else {
    response.status(404).end();
  }
});

userRouter.delete("/:id", async (request, response) => {
  await User.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

userRouter.put("/:id", (request, response) => {
  const body = request.body;

  //   const user = {
  //     email: body.email,
  //     loaned: body.loaned,
  //   };

  User.findByIdAndUpdate(request.params.id, { email: body.email }).then(
    (updatedUser) => {
      response.json(updatedUser);
    }
  );
});

module.exports = userRouter;
