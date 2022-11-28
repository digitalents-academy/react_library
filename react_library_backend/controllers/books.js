const express = require('express');
const router = express.Router();
const Book = require("../models/book.js");

//get all

//get id

// POST (Create book)
router.post('/', (request, response, next) => {
    const body = request.body
    const book = new Book({
      title: body.title,
      author: body.author,
      genre: body.genre,
      description: body.description,
      loanStatus: body.loanStatus || false,
      img: body.img,
      tags: body.tags,
      reservation: body.reservation,
    })
    book.save()
      .then(savedBook => {
        response.json(savedBook)
      })
      .catch(error => next(error))
})

// DELETE by ID
router.delete('/:id', (request, response, next) => {
    Book.findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

//put

module.exports = router;
