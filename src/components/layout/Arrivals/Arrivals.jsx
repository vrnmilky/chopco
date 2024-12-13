import Card from '../Card/Card';
import './arrivals.css'

const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__container">
                    <div className="arrivals__title">
                        NEW ARRIVALS
                    </div>
                    <div className="card__container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <a className="views__btn" href="#!">
                        View All
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Arrivals;