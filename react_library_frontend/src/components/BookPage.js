import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import '../book-page.css'
import { Link } from 'react-router-dom'
import EditBookForm from './EditBookForm'

function BookPage( {books, user} ) {

    const [book, setBook] = useState({})
    const bookId = useParams()

    // Fetch individual book & save to state
    useEffect(() => {
        axios.get(`http://localhost:3003/api/books/${bookId.bookId}`)
        .then(res => {setBook(res.data)})
        .catch((error) => console.log(error))
    }, [book])

    // Recommended books
    const otherBooks = books.filter((b) => b.id !== book.id)
    const sameAuthorOrGenre = otherBooks.filter((b) => b.author === book.author || b.genre === book.genre)

    // Show / Hide edit form
    const [editWindow, setEditWindow] = useState(false)
    const showEditWindow = () => setEditWindow(true)
    const hideEditWindow = () => setEditWindow(false)

    return (
        <div className='book-page'>
            <div className="back-and-edit-buttons">
                <Link to="/">
                    <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back to home page </button>
                </Link>

                {/* Edit button for Admin */}
                {user.admin && <button className="edit-button" onClick={showEditWindow}> Edit </button>}
            </div>

            {editWindow && <EditBookForm hideEditWindow={hideEditWindow} book={book} />}

            <div className='img-and-text' style={{ display: (editWindow && 'none') }}>
                <img className='book-image' src={book.img} alt='book cover'/>
                <div className='book-text'>
                    <h1> {book.title} </h1>
                    <p><b> Author: </b>{book.author}</p>
                    {book.genre && <p><b> Genre: </b>{book.genre}</p>}
                    {book.releaseYear && <p><b> Released: </b>{book.releaseYear}</p>}
                    {book.description && <p><b> Description: </b>{book.description}</p>}
                    {book.loaners?.length < book.copies && <p className='status-available'> AVAILABLE {book.copies-book.loaners.length} / {book.copies} </p>}
                    {book.loaners?.length >= book.copies && <p className='status-loaned'> NOT AVAILABLE (number of copies loaned: {book.copies}) </p>}
                </div>
            </div>

            {sameAuthorOrGenre.length > 0 && 
                <div className="recom-div" style={{ display: (editWindow && 'none') }}>
                    <h2>Recommended books</h2>
                    <div className='recom-all'>
                        {sameAuthorOrGenre.map((recomBook) => (
                            <div key={recomBook.id} className="recom-one">
                                <img className='recom-image' src={recomBook.img} alt='book cover'/>
                                <Link to={"/" + recomBook.id}><p>{recomBook.title}</p></Link>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}

export default BookPage