import Card from '../Card/Card';
import './productPage.css'
import image from './../../img/body/arrivals/arrivals1.jpg'
import Filter from '../Filter/Filter';


const ProductPage = () => {

    const products = [
        { id: 1, title: 'Title 1', image: image, price: 260, rating: 4.5 },
        { id: 2, title: 'Title 2', image: image, price: 224, rating: 4.3 },
        { id: 3, title: 'Title 3', image: image, price: 123, rating: 4.2 },
        { id: 4, title: 'Title 4', image: image, price: 55, rating: 4.1 },
        { id: 5, title: 'Title 5', image: image, price: 63, rating: 4.7 },
        { id: 6, title: 'Title 6', image: image, price: 523, rating: 3.5 },
        { id: 7, title: 'Title 7', image: image, price: 11, rating: 3.1 },
        { id: 8, title: 'Title 8', image: image, price: 116, rating: 3.4 },
        { id: 9, title: 'Title 9', image: image, price: 66, rating: 3.3 }
    ]

    function getProductList() {
        return products.map((item) => 
        <Card key={item.id} title={item.title} 
        image={item.image} 
        price={item.price} 
        rating={item.rating} />)
    }

    return (
        <div className="container">
            <div className="productPage-body">
                <Filter />
                <div className="productPage-container">
                    {getProductList()}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;