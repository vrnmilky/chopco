import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import './productPage.css'
import Filter from '../Filter/Filter';


const ProductPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        const api = 'http://localhost:9001/products'

        fetch(api)
            .then(result => result.json())
            .then((result) => {
                console.log(result)
                setProducts(result.data)
            })

    }, [])


    return (
        <div className="container">
            <div className="productPage-body">
                <Filter />
                <div className="productPage-container">
                    {products.map((item) =>
                        <Card id={item._id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />)}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;