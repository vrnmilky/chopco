import logoImg from './../../img/header/nav/logo.svg';
import arrowImg from './../../img/header/nav/down-arrow.svg';
import searchImg from './../../img/header/nav/search.svg';
import loginImg from './../../img/header/nav/login.svg';
import shoppingImg from './../../img/header/nav/shopping.svg';

// 
import './header.css';

function Header({ setPage, setModalBox }) {
  return (
    <header className="header">
      <div className='container'>
        <div className='header__row'>
          <a onClick={()=> setPage('Main')} href="#!"><img src={logoImg} className='header__logo' alt="logo" /></a>
          <nav className='header__nav'>
            <ul>
              <li><a className='header__nav-arrow' href="#!">Shop <img src={arrowImg} alt="arrow" /></a></li>
              <li><a href="#!">On Sale</a></li>
              <li><a href="#!">New Arrivals</a></li>
              <li><a href="#!">Brands</a></li>
            </ul>
          </nav>
          <div className="header__search">
            <img className='header__search-img' src={searchImg} alt="" />
            <input type="text" placeholder='Search for products...' />
          </div>
          <div className="header__user-cart">
            <a onClick={()=> setPage('Cart')} href="#!"><img src={shoppingImg} alt="" /></a>
            <a onClick={()=> setModalBox('Login')} href="#!"><img src={loginImg} alt="" /></a>
          </div>
        </div>
      </div>
      <a onClick={()=> setModalBox('AddProduct')} className="btn btn__add" href="#!">Добавить товар!</a>
    </header>
  );
}

export default Header;
