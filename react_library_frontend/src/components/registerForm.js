

const RegisterForm = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        console.log("Register Daniel");
    }

    return (
        <div>
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
                    <input type="password" name="register__password" id="register__password"></input>
                </div>
                <button type="submit" className="register--button">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;