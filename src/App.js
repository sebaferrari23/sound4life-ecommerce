import './styles/App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import FeaturedProducts from './components/Home/FeaturedProducts';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;