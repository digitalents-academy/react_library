import Form from "./components/form";
import Header from "./components/header";
import Search from "./components/Search";
import BookPage from "./components/BookPage";
import service from "./service/books";
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import './index.css';
import './form.css';
import './bookcard.css';
import './search.css';
import './app.css';


const App = () => {
  
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    service.getAll().then((book) => {
      setBooks(book);
    });
  }, [books]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
            <div>
              <Form />
                <div style={{display: 'flex'}}>
                  <LoginForm />
                  <RegisterForm />
                </div>
              <Search books={books} />
            </div>
        }/>
        <Route path="/:bookId" element={ <BookPage books={books} /> }/>
      </Routes>
    </Router>
  )
}

export default App;
