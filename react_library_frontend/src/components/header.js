import React from "react"
import { Link } from "react-router-dom"
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import "../header.css";

const Header = ( {user, setUser} ) => {

  const [loginWindow, setLoginWindow] = useState(false);
  const [registerWindow, setRegisterWindow] = useState(false);

  // show login window when clicking in login button
  const showLoginWindow = () => {
    setLoginWindow(!loginWindow)
    setRegisterWindow(false)
  }
  const showLogin = (e) => {
      
    // e.target is the element that has been clicked, e.currentTarget is the element that holds the onClick function (the parent container)
    if (e.target !== e.currentTarget) return;
      setLoginWindow(!loginWindow)
      setRegisterWindow(false)
  }

  // switch between log in and register
  const loginOrRegister = () => {
    setRegisterWindow(!registerWindow)
  }

  return (
    <div className='header'>
      <img className='header-logo' src="../images/logo-lightmode.png" alt='logo'></img>
      <nav className='navBar'>

        {/* Admin page link */}
        {user.admin && <Link to={"/admin"} className='admin-link'> Admin </Link>}

        {/* User page link */}
        {user && !user.admin && <Link to={"users/" + user.id} className='user-page-link'><ion-icon name="person-circle-outline" size="large"></ion-icon></Link>}

        {/* Login or Logout button */}
        { user === "" ? 
          <button className="frontPageLoginButton" onClick={showLoginWindow}>Login</button> 
          : <button
              className='logout-button'
              onClick={() => {
                localStorage.clear();
                setUser("");
                toast.info("Logged out");
              }}
          >
            Logout
          </button>
        }
      </nav>
      
      { loginWindow ? <div onClick={(e)=>showLogin(e)} className="popupBackground"> 
        <div className="loginRegisterWindowContainer">
          <p className="closeLoginRegisterWindow" onClick={showLoginWindow}>X</p>
          { !registerWindow ? <LoginForm setLoginWindow={setLoginWindow} loginOrRegister={loginOrRegister} setUser={setUser} /> 
          : <RegisterForm setLoginWindow={setLoginWindow} loginOrRegister={loginOrRegister} />}
        </div> 
      </div>
      : null}

    </div>
  )
}

export default Header;