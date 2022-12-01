import React, { useState } from 'react'
import BookCard from './bookcard';

function Search({ books }) {

    const [searchInput, setSearchInput] = useState("");

    let searchHandler = (e) => {
        setSearchInput(e.target.value.toLowerCase());
    }; 

    const filteredBooks = books.filter((book) => {
        if (searchInput === '') {
            return book;
        } else {
            return book.title.toLowerCase().includes(searchInput) || book.genre.toLowerCase().includes(searchInput)
        } 
    })

    return (
        <div>
            <div className="search-and-filter">
                <div className="search-bar">
                    <ion-icon name="search-outline"></ion-icon>
                    <input onChange={searchHandler} name="search-input" placeholder="Search for a book..."></input>
                </div>

                <div className="filter-by-genre">
                    <select onChange={searchHandler} name="genres" id="genres">
                        <option value="">Filter by Genre</option>
                        <option value="horror">Horror</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="nonfiction">Non-fiction</option>
                        <option value="selfhelp">Self Help</option>
                        <option value="fiction">Fiction</option>
                    </select>
                </div>
            </div>
            <BookCard filteredBooks={filteredBooks}/>
        </div>
    )
}

export default Search
