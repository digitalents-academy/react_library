import Form from "./components/form";
import Header from "./components/header";
import Search from "./components/Search";
import BookCard from "./components/bookcard";
import service from "./service/books";
import axios from "axios";
import { useState, useEffect} from 'react';

const App = () => {
  
  const [books, setBooks] = useState([]);
  


  useEffect(() => {
    service.getAll().then((book) => {
      setBooks(book);
    });
  }, [books]);

 

  return (
    <div>
      <Header />
      <Form />
      <Search books={books}/>
      <h2>Books</h2>
    </div>
  )

}


export default App;
