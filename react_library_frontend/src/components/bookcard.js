import service from "../service/books";
import React from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

const BookCard = ({ filteredBooks, user }) => {
  return (
    <div className="bookCardContainer">
      {filteredBooks.map((book) => {
        return (
          <React.Fragment key={book.id}>
            <div className="bookCard">
              <div className="imageAndContent">
                <img className="bookCard__image" src={book.img} />
                <div className="book__content">
                  <div className="titleAndBookPageLink">
                    <h1>{book.title}</h1>
                    <Link to={"/" + book.id} style={{ textDecoration: "none" }}>
                      {" "}
                      <h2 className="book--link"> More Info </h2>{" "}
                    </Link>

                    {/* Delete button & confirm message */}
                    {user.admin && (
                      <img
                        className="bookCard__deleteIcon"
                        src="./images/icon-close.svg"
                        onClick={() =>
                          confirmAlert({
                            title: "Are you sure you want to delete this book?",
                            buttons: [
                              {
                                label: "Yes",
                                onClick: () => {
                                  service.deleteBook(book.id);
                                  toast.success("Book deleted");
                                },
                              },
                              {
                                label: "No",
                                onClick: () => console.log("Not deleting"),
                              },
                            ],
                          })
                        }
                      />
                    )}
                  </div>

                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Release: {book.releaseYear}</p>
                  <p className="bookCard__description">
                    {book.description?.slice(0, 150).trim()}
                    {book.description?.length > 200 ? "..." : null}
                  </p>
                  <p className="bookStatus">
                    {book.loaners[0] ? "Loaned" : "Available"}
                  </p>

                  {/* checks if the loaner is the same as the user logged in */}
                  {book.loaners.filter((loaner) => loaner.user === user.id)
                    .length > 0 ? (
                    <button
                      className="bookCard__button"
                      onClick={() => {
                        service.updateReturnStatus(book.id);
                      }}
                    >
                      Return
                    </button>
                  ) : book.loaners.length < book.copies ? (
                    <button
                      className="bookCard__button"
                      onClick={() => {
                        service.updateLoanStatus(book.id);
                      }}
                    >
                      Loan
                    </button>
                  ) : (
                    <button className="bookCard__button">Unavailable</button>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BookCard;