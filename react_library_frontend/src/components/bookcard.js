

const BookCard = () => {

    return (
        <div className="book--card">
          <div className="book--content">
              <img className="book__image" src="./images/cover.jpg" />
              <div className="book__info">
                  <h1>Title</h1>
                  <p>Description</p>
                  <p>Genre</p>
                  <p>BORROWED</p>
              </div>
          </div>
        </div>
    )
}

export default BookCard;