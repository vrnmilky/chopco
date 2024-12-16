import Card from '../Card/Card';
import './arrivals.css'
import arrImg1 from './../../img/body/arrivals/arrivals1.jpg'
import arrImg2 from './../../img/body/arrivals/arrivals2.jpg'
import arrImg3 from './../../img/body/arrivals/arrivals3.jpg'
import arrImg4 from './../../img/body/arrivals/arrivals4.jpg'

const Arrivals = ({setPage}) => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__container">
                    <div className="arrivals__title">
                        NEW ARRIVALS
                    </div>
                    <div className="card__container">
                        <Card title='T-Shirt With Tape Details' img={arrImg1}/>
                        <Card title='Skinny Fit Jeans' img={arrImg2}/>
                        <Card title='Checkered Shir' img={arrImg3}/>
                        <Card title='Sleeve Striped T-shirt' img={arrImg4}/>
                    </div>
                    <a className="views__btn" href="#!"  onClick={() => setPage('MainArrivals')}>
                        View All
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Arrivals;