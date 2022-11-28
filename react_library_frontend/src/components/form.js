

const Form = () => {

    return (
        <div className="form--container">
            <h2>ADD NEW BOOK</h2>
            <form className="form">
                <div className="form--row--container">
                <div className="form--sub--div title--description--div">
                {/* <label className="book__title">Title
                <input type='text' name='title' />
                </label>
                
                 <label className="book__description">Description
                 <input type='text' name='description'/>
                 </label> */}
                 <div className="specific--form--div">
                 <label for='title' className="book__title">Title </label>
                 <input type='text' id="title" name='title' />
                 </div>

                 <div className="specific--form--div">
                 <label for='description' className="book__title">Description </label>
                 <input type='text' id="description" name='description' />
                 </div>
                               
                 </div>

                 <div className="form--sub--div image--genre--div">
                 {/* <label className="book_image">Image
                 <input type='text' name='image'/>
                 </label>
                 
                 <label className="book__genre">Genre
                 <input type='text' name='genre'/>
                 </label> */}
                  <div className="specific--form--div">
                 <label for='image' className="book__title">Image </label>
                 <input className="submit" type='text' id="image" name='image' />
                 </div>

                 <div className="specific--form--div">
                 <label for='genre' className="book__title">Genre </label>
                 <input type='text' id="genre" name='genre' />
                 </div>
                 </div>
                 </div>
                
                 <input className="submit__button" type='submit' value='Create Book'/>
            </form>
        </div>
    )
}

export default Form;