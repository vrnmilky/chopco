import './heroInfo.css'
import bodyImg from './../../img/header/header-homepage.png'
import starImg from './../../img/header/star.png'
import starImg1 from './../../img/header/star-1.png'


const heroInfo = () => {
    return (
        <div>
            <div className="hero__info-bg">
                <div className="container">
                    <div className="hero__info__row">
                        <div className="hero__info__content">
                            <div className="hero__info__content--text">
                                <h1 className="hero__info__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <div className="hero__info__text">
                                    Browse through our diverse range of meticulously crafted garments,
                                    designed to bring out your individuality and cater to your sense of
                                    style.
                                </div>
                                <a href="#!" className="hero__info__btn">
                                    Shop Now
                                </a>
                            </div>
                            <div className="hero__info__content--count">
                                <div className="hero__info__info--container">
                                    <div className="hero__info__info--title">200+</div>
                                    <div className="hero__info__info--text">International Brands</div>
                                </div>
                                <div className="hero__info__info--container">
                                    <div className="hero__info__info--title">2,000+</div>
                                    <div className="hero__info__info--text">High-Quality Products</div>
                                </div>
                                <div className="hero__info__info--container">
                                    <div className="hero__info__info--title">30,000+</div>
                                    <div className="hero__info__info--text">Happy Customers</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__info__img">
                            <img
                                className="hero__info__img--body"
                                src={bodyImg}
                                alt=""
                            />
                            <img className="hero__info__img-star" src={starImg1} alt="" />
                            <img className="hero__info__img-star1" src={starImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default heroInfo;