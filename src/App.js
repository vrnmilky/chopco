import React, { useState } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Arrivals from './components/layout/Arrivals/Arrivals';
import Brands from './components/layout/Brands/Brands';
import Cart from './components/views/Cart/Cart';
import ModalBox from './components/modalBox/ModalBox';
import Login from './components/layout/Login';
import Registration from './components/layout/Registration';
import MainArrivals from './components/layout/Arrivals/MainArrivals';
import HeroInfo from './components/layout/HeroInfo/HeroInfo';

function App() {
  const [page, setPage] = useState('Main')
  const [modalBox, setModalBox] = useState('')

  const pages = {
    Main: () => <Arrivals setPage={setPage} />,
    Cart: () => <Cart setPage={setPage} />,
    MainArrivals: () => <MainArrivals />
  }
  const modalBoxes = {
    none: null,
    Login:  <ModalBox setModalBox={setModalBox}><Login/></ModalBox>,
    Registration:  <ModalBox setModalBox={setModalBox}><Registration/></ModalBox>
  }


  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox} />
      {page === 'Main' && <HeroInfo />}
      {page === 'Main' && <Brands />}
      {pages[page]()}
      {modalBoxes [modalBox]}
      <Footer />
    </div>
  );
}

export default App;
