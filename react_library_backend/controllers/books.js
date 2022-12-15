const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book.js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// POST (Create book)
bookRouter.post("/", async (request, response, next) => {
  const authorization = request.get("authorization");
  console.log("auth: ", authorization);
  const body = request.body;
  const user = jwt.verify(authorization, process.env.SECRET);

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
    copies: body.copies,
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
  const books = await Book.find({}).populate("loaners", {
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

//return book
bookRouter.put("/return/:id", async (request, response, next) => {
  const authorization = request.get("authorization");
  const user = jwt.verify(authorization, process.env.SECRET);
  const databaseBook = await Book.findById(request.params.id);

  if (databaseBook.loaners.includes(user.id)) {
    let newBook = databaseBook;
    newBook.loaners = databaseBook.loaners.remove(user.id);
    console.log(newBook);
    Book.findByIdAndUpdate(request.params.id, newBook)
      .then((updatedBook) => {
        response.json(updatedBook);
      })
      .catch((error) => next(error));
  } else {
    response.status(444).end();
  }
});

//loan book
bookRouter.put("/:id", async (request, response, next) => {
  const authorization = request.get("authorization");
  const user = jwt.verify(authorization, process.env.SECRET);
  const databaseBook = await Book.findById(request.params.id);

  if (
    databaseBook.loaners.length < databaseBook.copies &&
    !databaseBook.loaners.includes(user.id)
  ) {
    let newBook = databaseBook;
    newBook.loaners = databaseBook.loaners.push(user.id);
    console.log(newBook);

    Book.findByIdAndUpdate(request.params.id, newBook)
      .then((updatedBook) => {
        response.json(updatedBook);
      })
      .catch((error) => next(error));
  } else {
    response.status(444).end();
  }
});

bookRouter.delete("/:id", async (request, response) => {
  console.log("backend");
  await Book.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = bookRouter;
