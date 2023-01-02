import React from 'react'
import '../edit-form.css'

function EditBookForm() {
    return (
        <div className='edit-component'>
            <div className='edit-form-header'>
                <h2>Edit book:</h2>
                <ion-icon name="close-outline" size="large"></ion-icon>
            </div>
            <form className='edit-form'>
                <label>Title</label>
                <input></input>
                
                <label>Author</label>
                <input></input>

                <label>Genre</label>
                <input></input>

                <label>Release Year</label>
                <input></input>

                <label>Description</label>
                <input></input>

                <label>Number of Copies</label>
                <input></input>

                <label>Image link</label>
                <input></input>
            </form>
        </div>
    )
}

export default EditBookForm
