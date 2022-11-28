const bookRouter = require("express").Router();
// const app = require("../index");
// const { collection } = require("../models/books");
const Book = require("../models/book");

//get all m
bookRouter.get("/", (request, response) => {
  console.log("asd");
  Book.find({}).then((book) => {
    response.json(book);
  });
});

//get id m
bookRouter.get("/:id", (request, response) => {
  Book.find({}).then((book) => {
    response.json(book);
  });
});
//post
//delete
//put m
bookRouter.put("/:id", (request, response, next) => {
  const body = request.body;
  const book = {
    likes: body.likes,
  };

  Book.findByIdAndUpdate(request.params.id, book, { new: true })
    .then((updatedBook) => {
      response.json(updatedBook);
    })
    .catch((error) => next(error));
});

module.exports = bookRouter;
