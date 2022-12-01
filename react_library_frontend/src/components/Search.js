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
            return book.title.toLowerCase().includes(searchInput)
        } 
    })

    return (
        <div>
            <div className="search-bar">
                <ion-icon name="search-outline"></ion-icon>
                <input onChange={searchHandler} name="search-input" placeholder="Search for a book..."></input>
            </div>
            <BookCard filteredBooks={filteredBooks}/>
        </div>
    )
}

export default Search
