import Card from '../Card/Card';
import './productPage.css'
import arrImg1 from './../../img/body/arrivals/arrivals1.jpg'
import Filter from '../Filter/Filter';


const ProductPage = () => {
    return (
        <div className="container">
            <div className="productPage-body">
            <Filter/>
            <div className="productPage-container">
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
                <Card title='T-Shirt With Tape Details' img={arrImg1} />
            </div>
            </div>
        </div>
    );
}

export default ProductPage;