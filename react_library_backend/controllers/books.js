const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book.js");

// POST (Create book)
bookRouter.post("/", (request, response, next) => {
  const body = request.body;
  const book = new Book({
    title: body.title,
    author: body.author,
    genre: body.genre,
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

// DELETE by ID
bookRouter.delete("/:id", (request, response, next) => {
  Book.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

//get all
bookRouter.get("/", (request, response) => {
  console.log("asd");
  Book.find({}).then((book) => {
    response.json(book);
  });
});

//get id
bookRouter.get("/:id", (request, response) => {
  Book.find({}).then((book) => {
    response.json(book);
  });
});

//put
bookRouter.put("/:id", (request, response, next) => {
  const body = request.body;
  const book = {
    title: body.title,
  };

  Book.findByIdAndUpdate(request.params.id, book, { new: true })
    .then((updatedBook) => {
      response.json(updatedBook);
    })
    .catch((error) => next(error));
});

module.exports = bookRouter;
