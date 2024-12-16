import './card.css';
import ratingImg from './../../img/body/stars/4.5-stars.png'

const Card = ({title, image, price, rating }) => {
    return ( 
        <div className="card">
            <a href="#!"className='card__link'></a>
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