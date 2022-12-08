const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book.js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// POST (Create book)
bookRouter.post("/", async (request, response, next) => {
  const authorization = request.get("authorization");
  console.log(authorization.substring(7));
  const body = request.body;
  const user = jwt.verify(authorization.substring(7), process.env.SECRET);

  console.log(user);
  if (!user.admin) {
    return response.status(401).json({ error: "no admin rights" });
  }
  const book = new Book({
    title: body.title,
    author: body.author,
    genre: body.genre,
    releaseYear: body.releaseYear,
    description: body.description,
    loanStatus: body.loanStatus || false,
    img: body.img,
    tags: body.tags,
    reservation: body.reservation,
  });
  book
    .save()
    .then((savedBook) => {
      response.json(savedBook);
    })
    .catch((error) => next(error));
});

//get all
bookRouter.get("/", async (request, response) => {
  const books = await Book.find({}).populate("loaner", {
    email: 1,
  });
  response.json(books);
});

//get id
bookRouter.get("/:id", async (request, response) => {
  const book = await Book.findById(request.params.id);
  if (book) {
    response.json(book.toJSON());
  } else {
    response.status(404).end();
  }
});

// PUT (Update book with loan status and loaner Id)
bookRouter.put("/:id", async (request, response, next) => {
  const body = request.body;
  const user = await User.findById(body.userId);

  const book = {
    loanStatus: body.loanStatus,
    loaner: user._id,
  };

  Book.findByIdAndUpdate(request.params.id, book)
    .then((updatedBook) => {
      response.json(updatedBook);
    })
    .catch((error) => next(error));

  // Add book to user.loaned array
  user.loaned = user.loaned.concat(request.params.id);
  await user.save();
});

bookRouter.delete("/:id", async (request, response) => {
  await Book.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = bookRouter;
