import React, { useState, useEffect } from 'react';

const AddProduct = ({setModalBox}) => {
    const [value, setValue] = useState(5);
    const [isTokenValid, setIsTokenValid] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };



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
                    } else {
                        console.log(data.message);
                    }
                })
                .catch((error) => console.error('Ошибка:', error));
        } else {
            console.log('Токен не найден');
        }
    }


    function Add() {
        const title = document.getElementById('title').value
        const image = document.getElementById('image').value
        const price = document.getElementById('price').value
        const rating = document.getElementById('rating').value
        const data = {
            title: title,
            image: image,
            price: price,
            rating: rating
        }
        console.log(data)

        const api = 'http://localhost:9001/add'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })


    }

    useEffect(() => {
        Valid();
    }, []);


    return (
        <div className="addProduct">
            {isTokenValid ? (
                <>
                    <h1>Добавить товар</h1>
                    <div className="title-box">
                        <p>Name</p>
                        <input id="title" type="text" />
                    </div>
                    <div className="image-box">
                        <p>Photo</p>
                        <input id="image" type="file" />
                    </div>
                    <div className="price-box">
                        <p>Price</p>
                        <input id="price" type="number" />
                    </div>
                    <div className="rating-box">
                        <p>Rating {value}</p>
                        <input
                            type="range"
                            id="rating"
                            name="rangeInput"
                            min="0"
                            max="5"
                            step="0.25"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>

                    <a onClick={Add} className="add_productBtn-text btn" href="#!">
                        Добавить
                    </a>
                </>
            ) : (
                <a onClick={() => setModalBox('Login')} href="#!" className='youNeedLogin'>You need to login</a>
            )}
        </div>
    );
};

export default AddProduct;