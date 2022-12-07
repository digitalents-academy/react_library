

const LoginForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
      console.log("daniele apua");
    }

    return (
        <div>
            <form className="login--form" onSubmit={handleSubmit}>
                <div className="email--input">
                    <label htmlFor='email' className="email">email</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className="password--input">
                    <label htmlFor='password' className="password">password</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <button type="submit" className="login--button">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;