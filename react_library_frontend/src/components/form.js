

const Form = () => {

    return (
        <div className="form--container">

            <h2>ADD NEW BOOK</h2>

            <form className="form">

            <div className="form--row--container">
              <div className="form--sub--div title--description--div">

                 <div className="specific--form--div">
                  <label className="book__title" for='title' >Title </label>
                  <input type='text' id="title" name='title' />
                 </div>

                 <div className="specific--form--div">
                  <label for='description' >Description </label>
                  <input type='text' id="description" name='description' />
                 </div>
                               
              </div>

              <div className="form--sub--div image--genre--div">

                <div className="specific--form--div">
                   <label className='image__and__genre' for='image' >Image </label>
                   <input type='text' id="image" name='image' />
                 </div>

                 <div className="specific--form--div">
                   <label className='image__and__genre' for='genre'>Genre </label>
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
