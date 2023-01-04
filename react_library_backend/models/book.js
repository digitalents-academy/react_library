const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  releaseYear: String,
  img: String,
  tags: Array,
  copies: Number,
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  loaners: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      loanDate: Date,
      returnDate: Date,
    },
  ],
});

bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", bookSchema);
