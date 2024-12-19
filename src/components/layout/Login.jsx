import { useState, useEffect } from "react";

const Login = ({ setModalBox }) => {
    const [isLogMessage, setLogMessage] = useState(false);
    const [isLogMessageBad, setLogMessageBad] = useState(false);
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [isTokenValid, setIsTokenValid] = useState(false);

    function Valid() {
        const token = localStorage.getItem('token');

        if (token) {
            const data = { token };

            const api = 'http://localhost:9001/checkToken';

            fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.name) {
                        setIsTokenValid(true);
                        setUserName(data.name);
                    } else {
                        console.log(data.message);
                    }
                })
                .catch((error) => console.error('Ошибка:', error));
        } else {
            console.log('Токен не найден');
        }
    }

    useEffect(() => {
        Valid();
    }, []);


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
        <div>
            {isTokenValid ? (
                <h1>Hello! {userName}</h1>
            ) : (
                <>
                    {isLogMessage ? (
                        <div className="isRegMessage">
                            <h1>{message}</h1>
                        </div>
                    ) : (
                        isLogMessageBad ? (
                            <div className="isRegMessage">
                                <h1>{message}</h1>
                                <a className="login--reg" onClick={() => setModalBox('Registration')} href="#!">
                                    Registration
                                </a>
                            </div>
                        ) : (
                            <>
                                <div className="login__container">
                                    <h1>Login</h1>
                                    <input id="login" placeholder='Login' type="text" />
                                    <input id="password" placeholder='Password' type="password" />
                                    <button onClick={Log}>Войти</button>
                                    <a onClick={() => setModalBox('Registration')} href="#!">Need to register? Registration</a>
                                </div>

                            </>
                        )
                    )}
                </>
            )}
        </div>
    );
};

export default Login;
