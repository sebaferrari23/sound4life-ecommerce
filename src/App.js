import './styles/App.scss'
import Hero from './components/Home/Hero'
import FeaturedProducts from './components/Home/FeaturedProducts';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default App;