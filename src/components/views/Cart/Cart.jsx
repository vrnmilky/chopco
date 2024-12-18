import React, { useState, useEffect } from 'react';
import './cart.css';
import CartProduct from '../CartProduct/CartProduct';
import promoImg from '../../img/order/promo.svg'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const updateQuantity = (id, action) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                return { ...item, quantity: Math.max(1, newQuantity) };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <section className="cart">
            <div className="container container-borderTop">
                <h1 className="cart__title">Your cart</h1>
                <div className="cart__container">
                    <div className="cart__container--product">
                        {cartItems.length === 0 ? (
                            <p className='empty_cart'>Empty cart</p>
                        ) : (
                            cartItems.map(item => (
                                <CartProduct
                                    key={item.id}
                                    item={item}
                                    removeFromCart={removeFromCart}
                                    updateQuantity={updateQuantity}
                                />
                            ))
                        )}
                    </div>


                    <div className="cart__container-order">
                        <div className="cart__container-order--container">
                            <h2 className="cart__container-order--title">Order Summary</h2>
                            <div className="cart__container-order-subtotal">
                                <p className='total'>Total: <span>${getTotalPrice()}</span></p>
                            </div>
                            <div className="promo__container">
                                <div className="input__container">
                                    <img src={promoImg} alt="" />
                                    <input className='input__promo' type="text" placeholder='Add promo code' />
                                </div>
                                <a className='input__promo-apply btn' href="#!">Apply</a>
                            </div>
                            <a href="#!" className="cart__container-order-btn btn">Go to Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;