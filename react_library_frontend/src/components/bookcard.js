const BookCard = ( {filteredBooks} ) => {

    const deleteBookCard = () => {
        service.deleteName()
    }

    return (
          <div className="book--content">
              <div className="book__info">
              <h2>Books</h2>
                  {filteredBooks
                  .map((book) => {
                      return (
                      <div className="book--card">
                          <img className="delete__icon" src="./images/icon-close.svg" onClick={()=>service.deleteName(book.id)} />
                          <img className="book__image" src="./images/cover.jpg" />
                      <h1>{book.title}</h1>
                      <p>Author: {book.author}</p>
                      <p>Genre: {book.genre}</p>
                      <p>{book.description}</p>
                      <p>{book.loanStatus ? 'Borrowed' : 'Available'}</p>
                      <button>{book.loanStatus ? 'Reserve' : 'Loan'}</button>
                      </div>)
                  })
                  }
               
              </div>
          </div>
    )
}

export default BookCard;