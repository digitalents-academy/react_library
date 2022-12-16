import userService from "../service/users";

import { toast } from "react-toastify";

import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";

const RegisterForm = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      email: e.target.register__email.value,
      password: e.target.register__password.value,
    };

    userService.createNewUser(newUser);

    e.target.register__email.value = "";
    setPassword("");
    toast.success("Register successful");
    props.setLoginWindow(false);
  };

  return (
    <div className="registerFormContainer">
      <h2>Register</h2>
      <form className="register--form" onSubmit={handleRegister}>
        <div className="register--email--input input--container">
          <label htmlFor="register__email" className="register__email">
            email
          </label>
          <input
            className={email.trim().length !== 0 ? "notEmpty" : null}
            type="email"
            name="register__email"
            id="register__email"
            onChange={({ target }) => setEmail(target.value)}
          ></input>
        </div>
        <div className="register--username--input input--container">
          <label htmlFor="register__username" className="register__username">
            username
          </label>
          <input
            className={username.trim().length !== 0 ? "notEmpty" : null}
            type="text"
            name="register__username"
            id="register__username"
            onChange={({ target }) => setUsername(target.value)}
          ></input>
        </div>
        <div className="register--password--input input--container">
          <label htmlFor="register__password" className="register__password">
            password
          </label>
          <div className="registerInputAndStrengthBar">
            <input
              // gives the class name if there is text in the input so the CSS can read the class and the background stays black when the input is not selected
              className={password.trim().length !== 0 ? "notEmpty" : null}
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              type="password"
              name="register__password"
              id="register__password"
            ></input>
            {password.length < 1 ? (
              <> </>
            ) : (
              <PasswordStrengthBar password={password} />
            )}
          </div>
        </div>
        <button type="submit" className="signUp submit--button">
          Register
        </button>
      </form>
      <p className="signIn signButton" onClick={() => props.loginOrRegister()}>
        sign in
      </p>
    </div>
  );
};

export default RegisterForm;
