import React from 'react'
import '../user-page.css'
import { Link } from 'react-router-dom'

function UserPage({ user }) {
    return (
        <div className="user-page">
            <Link to="/">
                <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back to home page </button>
            </Link>
            <div className="user-page-text">
                <h1>{user.email}</h1>
                <div className="loaned-books">
                    <h2>Loaned books</h2>
                    {console.log(user.loaned)}
                    {/* {user.loaned.map((book) => <p>{book.title} by {book.author}</p>)} */}
                </div>
                <h2>Reserved books</h2>
            </div>
        </div>
    )
}

export default UserPage