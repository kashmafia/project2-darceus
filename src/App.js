import './App.css';
import React, { useState } from 'react'

import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const args = JSON.parse(document.getElementById("data").text);
  const [products, setProduct] = useState(args.list_item);
  const [cart, setCart] = useState(args.user_cart);
  console.log(products);
  console.log(cart);

  return (
    <>
      <Header username={args.user_name} item={cart} setCart={setCart} />
      <main>
        <section className="relative w-full h-full">
          <div>
            <Hero />
          </div>
          <div>
            <Dashboard products={products} item={cart} setCart={setCart} absolute setProduct={setProduct} />
          </div>
          <Footer absolute />
        </section>
      </main>
    </>
  );
}

export default App;
