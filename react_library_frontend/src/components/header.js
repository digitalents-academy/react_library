import React from "react"
import { Link } from "react-router-dom"
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import "../header.css";

const Header = ( {user, setUser} ) => {


    const [popup, setPopup] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);

    const [loginWindow, setLoginWindow] = useState(false);
    const [registerWindow, setRegisterWindow] = useState(false);


      // show login window when clicking in login button
      const showLoginWindow = () => {
         setLoginWindow(!loginWindow)
         setRegisterWindow(false)
      }
      const showLogin = (e) => {
          
        // e.target is the element that has been clicked, e.currentTarget is the element that holds the onClick function (the parent container)
        if(e.target !== e.currentTarget) return;
        setLoginWindow(!loginWindow)
        setRegisterWindow(false)
     }

      // switch between log in and register
      const loginOrRegister = () => {
        setRegisterWindow(!registerWindow)

      }

    return (
        <div className='header'>
            <h1>Digitalents Academy's Library</h1>
           { user === "" ? <p onClick={showLoginWindow}>Login</p> : 
                 <button
                 onClick={() => {
                   localStorage.clear();
                   setUser("");
                   toast.info("Logged out");
                 }}
               >
                 logout
               </button>
           }
          

            {
           loginWindow ? <div onClick={(e)=>showLogin(e)} className="popupBackground"> <div className="loginRegisterWindowContainer">
               <p onClick={showLoginWindow}>Close</p>
            { !registerWindow ? <LoginForm loginOrRegister={loginOrRegister} setUser={setUser} /> : <RegisterForm loginOrRegister={loginOrRegister} />}
            </div> 
            </div>
            : null
            }
            {user.admin && <Link to={"/admin"} className='admin-link'> Admin </Link>}
        </div>
    )
}

export default Header;