import React from 'react';
import './cartProduct.css';
import basketImg from './../../img/order/basket.svg';
import plusImg from './../../img/order/plus.svg';
import minusImg from './../../img/order/minus.svg';



const CartProduct = ({ item, removeFromCart, updateQuantity }) => {
    const handleChangeQuantity = (action) => {
        updateQuantity(item.id, action);
    };

    return (
        <div className="cartProduct__container">
            <div className="cartProduct-border"></div>
            <img src={item.image} alt={item.title} className="cartProduct__img" />
            <div className="cartProduct__body">
                <div className="cartProduct__container-info">
                    <div className="cartProduct__blockText">
                        <h2 className='cartProduct--title'>{item.title}</h2>
                        <p className='cartProduct--text'>Size: <span>Large</span></p>
                        <p className='cartProduct--text'>Color: <span>White</span></p>
                    </div>
                    <div className="cartProduct__price">
                        ${item.price}
                    </div>
                </div>
                <div className="cartProduct__container-count">

                    <a onClick={() => removeFromCart(item.id)} className="cartProduct__remove">
                        <img className="cartProduct__remove--img" src={basketImg} alt="" />
                    </a>

                    <div className="cartProduct__count-btn">
                        <a onClick={() => handleChangeQuantity('decrease')} className='cartProduct__count-minus' href="#!"><img src={minusImg} alt="-" /></a>
                        <span className="cartProduct__quantity">{item.quantity}</span>
                        <a onClick={() => handleChangeQuantity('increase')} className='cartProduct__count-plus' href="#!"><img src={plusImg} alt="+" /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartProduct;