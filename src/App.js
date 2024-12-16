import React, { useState } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Arrivals from './components/layout/Arrivals/Arrivals';
import Brands from './components/layout/Brands/Brands';
import Cart from './components/views/Cart/Cart';
import ModalBox from './components/modalBox/ModalBox';
import Login from './components/layout/Login';
import Registration from './components/layout/Registration';

function App() {
  const [page, setPage] = useState('Main')
  const [modalBox, setModalBox] = useState('')

  const pages = {
    Main: <Arrivals />,
    Cart: <Cart />
  }
  const modalBoxes = {
    none: null,
    Login:  <ModalBox setModalBox={setModalBox}><Login/></ModalBox>,
    Registration:  <ModalBox setModalBox={setModalBox}><Registration/></ModalBox>
  }


  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox} />
      <Brands />
      {pages[page]}
      {modalBoxes [modalBox]}
      <Footer />
    </div>
  );
}

export default App;
