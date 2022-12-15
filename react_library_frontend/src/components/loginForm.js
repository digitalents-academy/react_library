import { useState } from "react";
import loginService from "../service/login";
import service from "../service/books";
import { toast } from 'react-toastify';

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
    } catch (exception) {
      console.error(exception);
      toast.error("Incorrect email or password");
    }
  };

  return (
    <div>
      <form className="login--form" onSubmit={handleLogin}>
        <div className="email--input">
          <label htmlFor="email" className="email">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>
        </div>
        <div className="password--input">
          <label htmlFor="password" className="password">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          ></input>
        </div>
        <button type="submit" className="login--button">
          Login
        </button>
      </form>

      <button
          onClick={() => {
            localStorage.clear();
            props.setUser("");
            setEmail("");
            setPassword("");
            toast.info("Logged out");
          }}
      > 
        Logout
      </button>
    </div>
  );
};

export default LoginForm;
