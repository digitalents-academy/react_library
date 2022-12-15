import userService from "../service/users";
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState } from "react";


const RegisterForm = (props) => {

    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            email: e.target.register__email.value,
            password: e.target.register__password.value
        }

        userService.createNewUser(newUser);
        
        e.target.register__email.value= "";
        e.target.register__password.value= "";
    }

    return (
        <div className="registerFormContainer">
            <form onSubmit={handleRegister}>
            <div className="register--email--input">
                    <label htmlFor='register__email' className="register__email">email</label>
                    <input type="email" name="register__email" id="register__email"></input>
                </div>
                <div className="register--username--input">
                    <label htmlFor='register__username' className="register__username">username</label>
                    <input type="text" name="register__username" id="register__username"></input>
                </div>
                <div className="register--password--input">
                    <label htmlFor='register__password' className="register__password">password</label>
                    <input onChange={({ target }) => setPassword(target.value)} value={password} type="password" name="register__password" id="register__password"></input>
                   { password.length < 1 ? <> </> : <PasswordStrengthBar password={password} /> }
                </div>
                <button type="submit" className="register--button">Register</button>
            </form>
            <p  onClick={() => props.loginOrRegister()}>sign in</p>
        </div>
    )
}

export default RegisterForm;