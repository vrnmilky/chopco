import React, { useState } from 'react';

const AddProduct = () => {
    const [value, setValue] = useState(5);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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

    return (
        <div className="addProduct">
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


            <a onClick={Add} className="add_productBtn-text btn" href="#!">Добавить</a>

        </div>

    );
}

export default AddProduct;