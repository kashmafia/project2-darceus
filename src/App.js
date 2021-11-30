import './App.css';
import React, {useState} from 'react'

import Hero from './components/Hero';
import chair from './components/chair.jpeg';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const args = JSON.parse(document.getElementById("data").text);
  const [products, setProduct] = useState(args.list_item);
  const cart_item = args.cart;
  console.log(cart_item);

  // const [cart, setCart] = useState(args.cart);
  const [cart, setCart] = useState([
    {
      id: 1,
      price: 1000.00,
      name: 'Ergonomic chair',
      description: 'fancy chair, like new',
      image: chair,
      quantity: 10,
    },{
      id: 3,
      name: 'Throwback Hip Bag',
      price: 90.00,
      description: 1,
      image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      quantity:1,
    }
  ]);

  


  return (
    <>
      <Header />
      <main>
        <section className="relative w-full h-full">
          <div>
            <Hero />
          </div>
          <div>
            <Dashboard products={products} item={cart} setCart={setCart} absolute />
          </div>
          <Footer absolute />
        </section>
      </main>
    </>
  );
}

export default App;
