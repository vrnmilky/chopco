import { useState } from "react";

const Login = ({ setModalBox }) => {
    const [isLogMessage, setLogMessage] = useState(false);
    const [isLogMessageBad, setLogMessageBad] = useState(false);
    const [message, setMessage] = useState('');

    function Log() {
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const data = {
            login: login,
            password: password
        }
        console.log(data)

        const api = 'http://localhost:9001/login'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .then((result) => {
                if (result.success) {
                    localStorage.setItem('token', result.token)
                    setLogMessage(true);
                    setMessage(result.message);
                    setTimeout(() => { setModalBox('none'); }, 500);

                } else {
                    setLogMessageBad(true);
                    setMessage(result.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('An error occurred while logging in.');
            });
    }

    return (
        <>
            {isLogMessage ? (
                <div className="isRegMessage">
                    <h1>{message}</h1>
                </div>
            ) : (
                isLogMessageBad ? (
                    <div className="isRegMessage">
                        <h1>{message}</h1>
                        <a className="login--reg" onClick={() => setModalBox('Registration')} href="#!">Registration</a>
                    </div>
                ) : (
                    <>
                        <h1>Login</h1>
                        <input id="login" placeholder='Login' type="text" />
                        <input id="password" placeholder='Password' type="password" />
                        <button onClick={Log}>Войти</button>
                        <a onClick={() => setModalBox('Registration')} href="#!">Need to register? Registration</a>
                    </>
                )
            )}
        </>
    );
};

export default Login;
