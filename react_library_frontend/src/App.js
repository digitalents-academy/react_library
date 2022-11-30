import Form from "./components/form";
import Header from "./components/header";
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
  }, []);

  console.log(books);

  return (
    <div>
      <Header />
      <Form />
      <h2>Books</h2>
      <BookCard books={books}/>
    </div>
  )

}


export default App;
