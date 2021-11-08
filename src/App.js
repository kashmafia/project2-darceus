import './App.css';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

// import Products from './components/Products/Products';
import Cart from './components'


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
          <Dashboard/>
        </div>

        <Footer absolute/>
        </section>
      </main>
    </>
  );
}

export default App;
