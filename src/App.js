import './styles/App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import FeaturedProducts from './components/Home/FeaturedProducts';
import Footer from './components/Footer'
import Detail from './components/Detail';

function App() {

  const sectionToShow = (section) => {
    switch(section) {
      case 'Home': return <FeaturedProducts />;
      case 'Detail': return <Detail />;
      default: return <FeaturedProducts />
    }
  }

  return (
    <>
      <Navbar />
      <Hero />
      {sectionToShow('Detail')}
      <Footer />
    </>
  );
}

export default App;