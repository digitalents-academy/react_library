import Header from "./components/header";
import Search from "./components/Search";
import BookPage from "./components/BookPage";
import Admin from "./components/Admin";
import UserPage from "./components/UserPage";
import service from "./service/books";
import Carousel from "./components/Carousel";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import "./form.css";
import "./bookcard.css";
import "./search.css";
import "./app.css";
import "./carousel.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [recom, setRecom] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
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
      <Header setUser={setUser} user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div style={{ display: "flex" }}></div>
              <Carousel books={books} recom={recom} />
              <Search books={books} user={user} />
            </div>
          }
        />
        <Route
          path="/:bookId"
          element={<BookPage books={books} user={user} />}
        />
        <Route path="/admin" element={<Admin books={books} />} />
        <Route path="users/:userId" element={<UserPage user={user} />} />
      </Routes>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable={false}
      />
    </Router>
  );
};

export default App;
