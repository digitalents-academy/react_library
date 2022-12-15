import { useState } from "react";
import loginService from "../service/login";
import service from "../service/books";
import { toast } from 'react-toastify';
import "../header.css";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email,
        password,
      });
      console.log(user);
      window.localStorage.setItem("user", JSON.stringify(user));
      service.setToken(user.token);
      props.setUser(user);
      setEmail("");
      setPassword("");
      toast.success("Logged in");
      props.setLoginWindow(false)
    } catch (exception) {
      console.error(exception);
      toast.error("Incorrect email or password");
    }
    
  };

  return (
    <div className="loginFormContainer">
      <h2>Login</h2>
      <form className="login--form" onSubmit={handleLogin} >
        <div className="email--input input--container">
          
          <label htmlFor="email" className="email">
            Email:
          </label>
          <input  
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>
        </div>
        <div className="password--input input--container">
          <label htmlFor="password" className="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          ></input>
         
        </div>
        <button type="submit" className="login--button submit--button">
          Login
        </button>
      </form>

   
        <p className="signUp signButton" onClick={() => props.loginOrRegister()}>sign up</p>

    </div>
  );
};

export default LoginForm;
