import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Arrivals from './components/layout/Arrivals/Arrivals';
import Brands from './components/layout/Brands/Brands';

function App() {
  return (
    <div className="App">
      <Header/>
      <Brands />
      <Arrivals/>
      <Footer/>
    </div>
  );
}

export default App;
