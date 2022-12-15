import Header from "./components/header";
import Search from "./components/Search";
import BookPage from "./components/BookPage";
import Admin from "./components/Admin";
import service from "./service/books";
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./index.css";
import "./form.css";
import "./bookcard.css";
import "./search.css";
import "./app.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <Header setUser={setUser} user={user}/>
      <Routes>
        <Route path="/" element={
            <div>
              <div style={{display: 'flex'}}>
               
                
              </div>
              <Search books={books} user={user} />
            </div>
        }/>
        <Route path="/:bookId" element={ <BookPage books={books} /> }/>
        <Route path="/admin" element={ <Admin books={books} /> }/>
      </Routes>
      <ToastContainer 
        autoClose={2000}
        
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable={false}
      />
    </Router>
  )
}

export default App;
