const Registration = ({ setModalBox }) => {

    function Log() {
        const login = document.getElementById('login').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            email: email,
            password: password
        }
        console.log(data)
    }

    return (
        <>
            <h1>Registration</h1>
            <input id="login" placeholder='Login' type="text" />
            <input id="email" placeholder='E-mail' type="email" />
            <input id="password" placeholder='Password' type="password" />
            <button onClick={Log}>Зарегистрироваться</button>
            <a onClick={() => setModalBox('Login')} href="#!">Already registered? Login</a>
        </>
    );
}

export default Registration;