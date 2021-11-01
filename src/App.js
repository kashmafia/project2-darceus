import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import chair from './components/chair.jpeg';

function App() {
  const product = {
    price: 1000.00,
    name: 'Ergonomic chair',
    description: 'fancy chair, like new',
    image: chair,
  }

  return (
    <div className="App">
      <Product product={product}/>
    </div>
  );
}

export default App;
