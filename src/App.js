import './App.css';
import Hero from './components/Hero';
// import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

import Products from './components/Products/Products';

function App() {
  return (
    <>
      <Header/>
      <main>
        <section className="relative w-full h-full">
        <div>
          <Hero/>
        </div>

        <div>
          <Products/>
        </div>

        <Footer absolute/>
        </section>
      </main>
    </>
  );
}

export default App;
