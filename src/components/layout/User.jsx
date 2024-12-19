import React, { useState } from 'react';


const User = () => {
    const [userName, setUserName] = useState('');

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
                        console.log(data)
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

    return (
        <H1>Hello! {userName}</H1>
    );
}

export default User;