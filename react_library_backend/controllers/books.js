// const bookRouter = require("express").Router();
// const app = require("../index");
// const { collection } = require("../models/blog");
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

//get all
bookRouter.get("/", (request, response) => {
  Book.find({}).then((book) => {
    response.json(book);
  });
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

//put
bookRouter.put("/:id", (request, response, next) => {
  const body = request.body;
  const book = {
    loanStatus: body.loanStatus,
  };

  Book.findByIdAndUpdate(request.params.id, book, { new: true })
    .then((updatedBook) => {
      response.json(updatedBook);
    })
    .catch((error) => next(error));
});

bookRouter.delete('/:id', async (request, response) => {
  await Book.findByIdAndRemove(request.params.id)
  response.status(204).end()
})



module.exports = bookRouter;
