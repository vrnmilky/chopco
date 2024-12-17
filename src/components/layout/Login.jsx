import { useState } from "react";

const Login = ({ setModalBox }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                console.log(result);
                if (result.success) {
                    setIsLoggedIn(true);
                    setMessage(result.message || 'Вы успешно авторизовались!');
                } else {
                    setMessage(result.message || 'Неверный логин или пароль');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('An error occurred while logging in.');
            });
    }

    return (
        <>
            {isLoggedIn ? (
                <div>
                    <h1>{message}</h1>
                </div>
            ) : (
                <>
                    <h1>Login</h1>
                    <input id="login" placeholder='Login' type="text" />
                    <input id="password" placeholder='Password' type="password" />
                    <button onClick={Log}>Войти</button>
                    <a onClick={() => setModalBox('Registration')} href="#!">Need to register? Registration</a>
                </>
            )}
        </>
    );
};

export default Login;
