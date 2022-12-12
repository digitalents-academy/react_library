import Form from "./components/form";
import Header from "./components/header";
import Search from "./components/Search";
import BookPage from "./components/BookPage";
import service from "./service/books";
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./index.css";
import "./form.css";
import "./bookcard.css";
import "./search.css";
import "./app.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    service.getAll().then((book) => {
      setBooks(book);
    });
  }, [books]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("user");
    console.log("asd");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      service.setToken(user.token);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
            <div>
              <Form />
                <div style={{display: 'flex'}}>
                  <LoginForm setUser={setUser} />
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
