import { useState } from "react";



const Registration = ({ setModalBox }) => {
    const [isRegMessage, setLogMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    function validateForm(data) {
        const newErrors = {};

        if (!data.login || data.login.trim().length === 0) {
            newErrors.login = 'Логин обязателен для заполнения.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            newErrors.email = 'Введите корректный email.';
        }

        if (!data.password || data.password.length < 6) {
            newErrors.password = 'Пароль должен содержать не менее 6 символов.';
        }

        return newErrors;
    }

    function Reg() {
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        const data = {
            login: login,
            password: password,
            email: email
        }
        console.log(data)

        const validationErrors = validateForm(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

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
                if (result.success) {
                    setLogMessage(true);
                    setMessage(result.message);
                } else {
                    setLogMessage(true);
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
            {isRegMessage ? (
                <div className="isRegMessage">
                    <h1>{message}</h1>
                    <a className="login--reg" onClick={() => setModalBox('Login')} href="#!">Sign In</a>
                </div>
            ) : (
                <>
                    <h1>Registration</h1>
                    <div>
                        <input id="login" placeholder="Login" type="text" />
                        {errors.login && <p style={{ color: 'red' }}>{errors.login}</p>}
                    </div>
                    <div>
                        <input id="email" placeholder="E-mail" type="email" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div>
                        <input id="password" placeholder="Password" type="password" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    </div>
                    <button onClick={Reg}>Зарегистрироваться</button>
                    <a onClick={() => setModalBox('Login')} href="#!">Already registered? Login</a>
                </>
            )}
        </>
    );
}

export default Registration;