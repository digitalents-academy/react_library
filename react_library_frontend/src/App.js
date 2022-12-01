import Form from "./components/form";
import Header from "./components/header";
import Search from "./components/Search";
import service from "./service/books";
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
      <Search books={books} />
    </div>
  )
}

export default App;
