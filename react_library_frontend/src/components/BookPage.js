import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import '../book-page.css'

function BookPage( {books} ) {

    const [book, setBook] = useState({})
    const bookId = useParams()

    // Fetch individual book & save to state
    useEffect(() => {
        axios.get(`http://localhost:3003/api/books/${bookId.bookId}`)
        .then(res => {setBook(res.data)})
        .catch((error) => console.log(error))
    }, [book])

    return (
        <div className='book-page'>
            {book.img && <img className='book-image' src={book.img} alt='cover'/>}
            <div className='book-text'>
                {book.title && <h1> {book.title} </h1>}
                {book.author && <p><b> Author: </b>{book.author}</p>}
                {book.genre && <p><b> Genre: </b>{book.genre}</p>}
                {book.releaseYear && <p><b> Released: </b>{book.releaseYear}</p>}
                {book.description && <p><b> Description: </b>{book.description}</p>}
                <p className={book.loanStatus ? 'status-loaned' : 'status-available'}> {book.loanStatus ? "NOT AVAILABLE" : "AVAILABLE"}</p>
            </div>
        </div>
    )
}

export default BookPage
