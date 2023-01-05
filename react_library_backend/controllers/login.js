const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { email, password, loaned } = request.body;
  console.log(request.body);
  const user = await User.findOne({ email }).populate("loaned");;
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }
  const userForToken = {
    email: user.email,
    id: user._id,
    admin: user.admin,
    loaned: user.loaned
  };

  const token = jwt.sign(
    userForToken,
    process.env.SECRET,
    //token expires in 24h
    { expiresIn: 60 * 60 * 24 }
  );

  response.status(200).send({ token, email: user.email, admin: user.admin, id: user._id, loaned: user.loaned});
});

module.exports = loginRouter;
