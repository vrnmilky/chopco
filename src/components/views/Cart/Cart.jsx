import './cart.css'
import CartProduct from '../CartProduct/CartProduct';
import ProductInfo from '../../layout/ProductPage/ProductInfo';

const cart = () => {
    return (
        <section className='cart'>
            <div className="container container-borderTop">
                <h1 className='cart__title'>Your cart</h1>
                <ProductInfo/>
                {/* <div className="cart__container">
                    <div className="cart__container--product">
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div className="cart__container-order">
                        <div className="cart__container-order--container">
                            <h2 className='cart__container-order--title'>Order Summary</h2>
                            <div className="cart__container-order-subtotal">
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default cart;