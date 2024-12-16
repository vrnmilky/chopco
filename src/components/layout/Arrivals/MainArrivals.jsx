import Card from '../Card/Card';
import './mainArrivals.css'
import arrImg1 from './../../img/body/arrivals/arrivals1.jpg'
import Filter from '../Filter/Filter';


const MainArrivals = () => {
    return (
        <div className="container">
            <div className="MainArrivals-body">
            <Filter/>
            <div className="main_arrivals-container">
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

export default MainArrivals;