import './App.css';
import Header from './components/Header';
import About_us from './components/About';
import Shop from './components/offers';
import Menu from './components/Menu';
// import Clients from './components/About_Clients';
import Product from './components/productdetails';

function App() {
  return (
    <div className="App">
        <Header />
        <About_us />
        <Shop />
        <Menu />
        <Product />
        {/* <Clients /> */}
    </div>
  );
}

export default App;
