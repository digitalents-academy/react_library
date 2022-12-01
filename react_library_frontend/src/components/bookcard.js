import service from "../service/books";
import React from "react";

const BookCard = ({ filteredBooks }) => {
  return (
    <div className="book--content">
      <div className="book__info">
        {filteredBooks.map((book) => {
          return (
            <React.Fragment key={book.id}>
              <div className="book--card">
                <img
                  className="delete__icon"
                  src="./images/icon-close.svg"
                  onClick={() => service.deleteBook(book.id)}
                />
                <img className="book__image" src="./images/cover.jpg" />
                <h1>{book.title}</h1>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>{book.description}</p>
                <p>{book.loanStatus ? "Loaned" : "Available"}</p>

                <button
                  onClick={() =>
                    service.updateLoanStatus(book.id, {
                      loanStatus: !book.loanStatus,
                    })
                  }
                >
                  {book.loanStatus ? "Return" : "Loan"}
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BookCard;