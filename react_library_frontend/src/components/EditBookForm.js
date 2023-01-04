import React from 'react'
import service from "../service/books"
import '../edit-form.css'
import { toast } from 'react-toastify'

function EditBookForm({ hideEditWindow, book }) {

    const handleEdit = (e) => {
        e.preventDefault()
    
        const updatedBook = {
          title: e.target.title.value,
          author: e.target.author.value,
          genre: e.target.genre.value,
          releaseYear: e.target.releaseYear.value,
          description: e.target.description.value,
          copies: e.target.copies.value,
          img: e.target.image.value,
        }

        service.updateBook(book.id, updatedBook)
        toast.success("Book updated")
        hideEditWindow()
    }
    
    return (
        <div className='edit-component'>
            <div className='edit-form-header'>
                <h2>Edit book:</h2>
                <ion-icon name="close-outline" size="large" onClick={hideEditWindow}></ion-icon>
            </div>

            <form className='edit-form' onSubmit={handleEdit}>
                <label>Title</label>
                <input name="title" defaultValue={book.title}></input>
                
                <label>Author</label>
                <input name="author" defaultValue={book.author}></input>

                <label>Genre</label>
                <select name='genre' defaultValue={book.genre}>
                    <option value=''>Select a Genre</option>
                    <option value='Non Fiction'>Non Fiction</option>
                    <option value='Biography'>Biography</option>
                    <option value='Hobbies'>Hobbies</option>
                    <option value='Self Improvement'>Self Improvement</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='Romance'>Romance</option>
                    <option value='Horror'>Horror</option>
                    <option value='Philosophy'>Philosophy</option>
                    <option value='Sci-Fi'>Sci-Fi</option>
                </select>

                <label>Release Year</label>
                <input type="number" name="releaseYear" defaultValue={book.releaseYear}></input>

                <label>Description</label>
                <textarea name="description" defaultValue={book.description}></textarea>

                <label>Number of Copies</label>
                <input type="number" name="copies" defaultValue={book.copies}></input>

                <label>Image Link</label>
                <input name="image" defaultValue={book.img}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditBookForm
