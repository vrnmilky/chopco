import './productInfo.css'

const ProductInfo = () => {
    return (
        <div className="productInfo">
            <div className="container productInfo-container">
                <div className="productInfo__container-img">
                    <img className='productInfo-img1 active-img' src="" alt="" />
                    <img className='productInfo-img2' src="" alt="" />
                    <img className='productInfo-img3' src="" alt="" />
                    <img className='productInfo-imgBig' src="" alt="" />
                </div>
                <div className="productInfo__container-toCart">
                    <h2 className='productInfo__toCart--title'>One Life Graphic T-shirt</h2>
                    <div className="productInfo__rating">
                        <img src="{ratingImg}" alt="stars" />
                        <div className="productInfo__rating-count">
                            4.5/<span>5</span>
                        </div>
                    </div>
                    <div className="productInfo__price">
                        $540
                    </div>
                    <p className='productInfo-text' >This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                    <div className="productInfo-selectColor">
                        <p className='productInfo-select'>Select Colors</p>
                        <div className="productInfo__color-circle-container">
                            <div className="color-circle dark-green color-circle-active" />
                            <div className="color-circle blue" />
                            <div className="color-circle green" />
                        </div>
                    </div>

                    <div className="productInfo-choozeSize">
                        <p className="productInfo-choozeSize-text">Choose Size</p>
                        <div className="productInfo__size-btn-container">
                            <a href="#!" className="productInfo__size-btn">
                                Small
                            </a>
                            <a href="#!" className="productInfo__size-btn ">
                                Medium
                            </a>
                            <a href="#!" className="productInfo__size-btn productInfo__size-btn-active ">
                                Large
                            </a>
                            <a href="#!" className="productInfo__size-btn">
                                X-Large
                            </a>
                        </div>
                    </div>

                    <div className="productInfo-order">
                        <div className="productInfo-btnCount">
                            <div className="productInfo-btnCount-minus">-</div>
                            <div className="productInfo-btnCount-count">1</div>
                            <div className="productInfo-btnCount-plus">+</div>
                        </div>
                        <a className='productInfo-order-btnCart' href="#!">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;