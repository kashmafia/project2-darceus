import './App.css';
import Hero from './components/Hero';
import chair from './components/chair.jpeg';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const products = [
    {
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
    {
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
    {
      price: 1000.00,
      name: 'Ergonomic chair',
      description: 'fancy chair, like new',
      image: chair,
    }
  ]


  return (
    <>
      <Header />
      <main>
        <section className="relative w-full h-full">
          <div>
            <Hero />
          </div>
          <div>
            <Dashboard item={products} absolute />
          </div>
          <Footer absolute />
        </section>
      </main>
    </>
  );
}

export default App;
