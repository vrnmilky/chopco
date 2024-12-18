import React, { useState } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Brands from './components/layout/Brands/Brands';
import Cart from './components/views/Cart/Cart';
import ModalBox from './components/modalBox/ModalBox';
import Login from './components/layout/Login';
import Registration from './components/layout/Registration';
import HeroInfo from './components/layout/HeroInfo/HeroInfo';
import ProductPage from './components/layout/ProductPage/ProductPage'
import Main from './components/layout/Main/Main'
import AddProduct from './components/views/AddProduct/AddProduct';

function App() {
  const [page, setPage] = useState('Main')
  const [modalBox, setModalBox] = useState('')

  const pages = {
    Main: () => <Main setPage={setPage} />,
    Cart: () => <Cart setPage={setPage} />,
    ProductPage: () => <ProductPage />
  }
  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>,
    AddProduct: <ModalBox setModalBox={setModalBox}><AddProduct /></ModalBox>
  }


  return (
    <div className="App">
      {modalBoxes[modalBox]}
      <Header setPage={setPage} setModalBox={setModalBox} />
      {page === 'Main' && <HeroInfo setPage={setPage} />}
      {page === 'Main' && <Brands />}
      {pages[page]()}
      <Footer />
    </div>
  );
}

export default App;
