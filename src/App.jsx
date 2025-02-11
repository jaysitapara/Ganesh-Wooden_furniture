import './App.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import Contact from './pages/Contact'

// Import all images
import workshopImage from './assets/workshop.jpg';
import craftingImage from './assets/crafting.jpg';
import image1 from './assets/slide1.jpg';
import image2 from './assets/slide2.jpg';
import image3 from './assets/slide3.jpg';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ImageSlider />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
