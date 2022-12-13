import React from 'react'
import '../admin.css'
import Form from './form'
import { Link } from 'react-router-dom'


function Admin() {
    return (
        <div className='admin-page'>
            <Link to="/">
                <button className="back-button"><ion-icon name="arrow-back-outline"></ion-icon> Back to home page </button>
            </Link>
            <Form />
        </div>
    )
}

export default Admin
