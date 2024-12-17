const Registration = ({ setModalBox }) => {

    function Reg() {
        const login = document.getElementById('login').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            email: email,
            password: password
        }
        console.log(data)

        const api = 'http://localhost:9001/registration'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
            console.log(result)
        })
    }

    return (
        <>
            <h1>Registration</h1>
            <input id="login" placeholder='Login' type="text" />
            <input id="email" placeholder='E-mail' type="email" />
            <input id="password" placeholder='Password' type="password" />
            <button onClick={Reg}>Зарегистрироваться</button>
            <a onClick={() => setModalBox('Login')} href="#!">Already registered? Login</a>
        </>
    );
}

export default Registration;