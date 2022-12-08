const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  releaseYear: String,
  loanStatus: Boolean,
  img: String,
  tags: Array,
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  loaner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", bookSchema);
