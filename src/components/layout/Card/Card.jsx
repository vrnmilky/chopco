import './card.css';
import ratingImg from './../../img/body/stars/4.5-stars.png'

const Card = ({id, title, image, price, rating}) => {

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const product = {
            id,
            title,
            image,
            price,
            rating,
            quantity: 1
        };

        // Проверяем, есть ли уже этот товар в корзине
        const productIndex = cart.findIndex(item => item.id === id);

        if (productIndex === -1) {
            cart.push(product);
        } else {
            cart[productIndex] = product;
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Товар добавлен в корзину');
    };
    return ( 
        
        <div className="card">
            <a onClick={addToCart} href="#!"className='card__link'></a>
            <img className='card__img' src={image} alt="" />
            <div className="card__body">
                <div className="card__title">
                {title}
                </div>
                <div className="card__rating">
                    <img src={ratingImg} alt="stars" />
                    <div className="card__rating-count">
                        {rating}/<span>5</span>
                    </div>
                </div>
                <div className="card__price">
                 ${price}
                </div>
                
            </div>
        </div>
     );
}
 
export default Card;