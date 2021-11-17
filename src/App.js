import './App.css';
import React, {useState} from 'react'

import Hero from './components/Hero';
import chair from './components/chair.jpeg';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // const args = JSON.parse(document.getElementById("data").text);
  // const real_product = args.list_item;
  // console.log(real_product);

  // const [cart, setCart] = useState(args.user_cart);
  const [cart, setCart] = useState([{
    price: 1000.00,
    name: 'Ergonomic chair',
    description: 'fancy chair, like new',
    image: chair,
  },{
    name: 'Throwback Hip Bag',
    price: 90.00,
    quantity: 1,
    image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
  }]);

  
  
  const products = [{
    price: 1000.00,
    name: 'Ergonomic chair',
    description: 'fancy chair, like new',
    image: chair,
  },
  {
    price: 1000.00,
    name: 'Ergonomic chair',
    description: 'fancy chair, like new',
    image: chair,
  },
];


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
