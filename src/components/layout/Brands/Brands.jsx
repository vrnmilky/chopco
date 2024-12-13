import './brands.css';
import versageImg from './../../img/header/logo/versace-logo.png'
import zaraImg from './../../img/header/logo/zara-logo.png'
import gucciImg from './../../img/header/logo/gucci-logo.png'
import pradaImg from './../../img/header/logo/prada-logo.png'
import ckImg from './../../img/header/logo/ck-logo.png'



const Brands = () => {
    return (
        <section className='brands'>
            <div className="container">
                <ul className='brands__list'>
                    <li><a href="#!"><img src={versageImg} alt="" /></a></li>
                    <li><a href="#!"><img src={zaraImg} alt="" /></a></li>
                    <li><a href="#!"><img src={gucciImg} alt="" /></a></li>
                    <li><a href="#!"><img src={pradaImg} alt="" /></a></li>
                    <li><a href="#!"><img src={ckImg} alt="" /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Brands;