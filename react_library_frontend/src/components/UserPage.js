import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../user-page.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserPage(props) {

    const params = useParams()
    const [user, setUser] = useState('')

    // Fetch user
    useEffect(() => {
        axios.get(`http://localhost:3003/api/users/${params.userId}`, 
        {headers: {Authorization: props.user.token}})
        .then(res => setUser(res.data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className="user-page">
            <Link to="/">
                <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back to home page </button>
            </Link>
            <div className="user-page-text">
                <h1>{user.email}</h1>
                <div className="loaned-books">
                    <h2>Loaned books</h2>
                    {user.loaned && user.loaned.map((book) => <p key={book.id}>{book.title} by {book.author}</p>)}
                </div>
            </div>
        </div>
    )
}

export default UserPage