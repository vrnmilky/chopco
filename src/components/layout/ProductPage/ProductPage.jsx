import Card from '../Card/Card';
import './productPage.css'
import image from './../../img/body/arrivals/arrivals1.jpg'
import Filter from '../Filter/Filter';


const ProductPage = () => {

    let products = []

    const api = 'http://localhost:9001/products'

    fetch(api)
        .then(result => result.json())
        .then((result) => {
            console.log(result)
            products = result.data
        })

    function getProductList() {
        return products.map((item) =>
            <Card key={item.id}
                title={item.title}
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