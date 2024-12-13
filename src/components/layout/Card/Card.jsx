import './card.css';
import arrImg1 from './../../img/body/arrivals/arrivals1.jpg'
import ratingImg from './../../img/body/stars/4.5-stars.png'

const Card = () => {
    return ( 
        <div className="card">
            <a href="#!"className='card__link'></a>
            <img className='card__img' src={arrImg1} alt="arrImg" />
            <div className="card__body">
                <div className="card__title">
                Skinny Fit Jeans
                </div>
                <div className="card__rating">
                    <img src={ratingImg} alt="stars" />
                    <div className="card__rating-count">
                        4.5/<span>5</span>
                    </div>
                </div>
                <div className="card__price">
                 $260
                </div>
            </div>
        </div>
     );
}
 
export default Card;