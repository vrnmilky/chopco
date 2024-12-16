import Card from '../Card/Card';
import './topselling.css'
import arrImg1 from './../../img/body/top-selling/top-selling1.jpg'
import arrImg2 from './../../img/body/top-selling/top-selling2.jpg'
import arrImg3 from './../../img/body/top-selling/top-selling3.jpg'
import arrImg4 from './../../img/body/top-selling/top-selling4.jpg'

const TopSelling = ({setPage}) => {
    return (
        <section className="top__selling">
            <div className="container">
                <div className="top__selling--container">
                    <div className="top__selling--title">
                        TOP SELLING
                    </div>
                    <div className="card__container">
                        <Card title='T-Shirt With Tape Details' img={arrImg1}/>
                        <Card title='Skinny Fit Jeans' img={arrImg2}/>
                        <Card title='Checkered Shir' img={arrImg3}/>
                        <Card title='Sleeve Striped T-shirt' img={arrImg4}/>
                    </div>
                    <a className="views__btn" href="#!"  onClick={() => setPage('ProductPage')}>
                        View All
                    </a>
                </div>
            </div>
        </section >
    );
}

export default TopSelling;