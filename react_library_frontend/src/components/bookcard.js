import service from "../service/books";
import React from "react";
import { Link } from "react-router-dom";

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
                      <Link to={"/" + book.id} style={{textDecoration: 'none'}}> <h2 className="book--link"> More Info </h2> </Link>

                      {/* DELETE BUTTON */}
                      {user.admin && 
                        <img
                          className="bookCard__deleteIcon"
                          src="./images/icon-close.svg"
                          onClick={() => service.deleteBook(book.id)}/>
                      }
                    </div>
                    
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Release: {book.releaseYear}</p>
                    <p>{book.description}</p>
                    <p className="bookStatus">{book.loanStatus ? "Loaned" : "Available"}</p>
                    <button className="bookCard__button"
                      // onClick={() =>
                      //   service.updateLoanStatus(book.id, {
                      //     loanStatus: !book.loanStatus,
                      //     loaner: {_id: book.loaner._id, email: book.loaner.email}
                      //   })
                      // }
                      >
                      {book.loanStatus ? "Return" : "Loan"}
                      {/* {console.log(Object.keys(book.loaner).length)}  */}
                    </button>
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