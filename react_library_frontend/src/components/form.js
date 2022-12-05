import React from 'react'
import axios from 'axios'

const Form = () => {

  function handleCreateNew(e) {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      releaseYear: e.target.releaseYear.value,
      description: e.target.description.value,
      img: e.target.image.value
    }

    axios.post('http://localhost:3003/api/books/', newBook)
    .then(res => console.log(res.data));

    // Clear input field after submit
    e.target.title.value = ""
    e.target.author.value = ""
    e.target.genre.value = ""
    e.target.description.value = ""
    e.target.image.value = ""
    e.target.releaseYear.value = ""
  }

  return (
    <div className="form--container">
      <h2>ADD NEW BOOK</h2>
      <form className="form" onSubmit={handleCreateNew}>
        <div className="form--row--container">
          <div className="form--sub--div title--description--div">
            <div className="specific--form--div">
              <label htmlFor='title' className="book__title"> Title </label>
              <input type='text' id="title" name='title' required />
            </div>
            <div className="specific--form--div">
              <label htmlFor='author' className="book__author"> Author </label>
              <input type='text' id="author" name='author' required />
            </div>
            <div className="specific--form--div">
              <label htmlFor='description' className="book__title"> Description </label>
              <input type='text' id="description" name='description' required />
            </div>
          </div>
          <div className="form--sub--div image--genre--div">
            <div className="specific--form--div">
              <label className='image__and__genre' htmlFor='image' > Image </label>
              <input type='text' id="image" name='image' required />
            </div>
            <div className="specific--form--div">
              <label className='image__and__genre' htmlFor='genre'> Genre </label>
              <input type='text' id="genre" name='genre' required />
            </div>
            <div className="specific--form--div">
              <label className='releaseYear' htmlFor='releaseYear'> Released </label>
              <input type='text' id="releaseYear" name='releaseYear' required />
            </div>
          </div>
        </div>
        <input className="submit__button" type='submit' value='Create Book'/>
      </form>
    </div>
  )
}

export default Form;