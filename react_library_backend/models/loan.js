const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  book: mongoose.Schema.Types.ObjectId,
  loanDate: Date,
  returnDate: Date,
  loaner: mongoose.Schema.Types.ObjectId,
});

loanSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Loan", loanSchema);
