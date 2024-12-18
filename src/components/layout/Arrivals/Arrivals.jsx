import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './arrivals.css'

const Arrivals = ({ setPage }) => {
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
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__container">
                    <div className="arrivals__title">
                        NEW ARRIVALS
                    </div>
                    <div className="card__container">
                        {products.map((item) =>
                            <Card id={item._id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />)}
                    </div>
                    <a className="views__btn" href="#!" onClick={() => setPage('ProductPage')}>
                        View All
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Arrivals;