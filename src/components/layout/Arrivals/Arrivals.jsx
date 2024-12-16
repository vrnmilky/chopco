import Card from '../Card/Card';
import './arrivals.css'
import image from './../../img/body/arrivals/arrivals1.jpg'

const Arrivals = ({ setPage }) => {


    const products = [
        { id: 1, title: 'Title 1', image: image, price: 260, rating: 4.5 },
        { id: 2, title: 'Title 2', image: image, price: 224, rating: 4.3 },
        { id: 3, title: 'Title 3', image: image, price: 123, rating: 4.2 },
        { id: 4, title: 'Title 4', image: image, price: 55, rating: 4.1 }
    ]

    function getProductList() {
        return products.map((item) =>
            <Card key={item.id} title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} />)
    }



    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__container">
                    <div className="arrivals__title">
                        NEW ARRIVALS
                    </div>
                    <div className="card__container">
                        {getProductList()}
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