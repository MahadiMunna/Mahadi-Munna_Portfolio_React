import './App.css';
import ParticleBackground from './components/ParticleBackground';
import { Toaster } from 'react-hot-toast';
import Navbar from './Pages/Navbar/Navbar';
import Banner from './Pages/Home/Banner';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <ParticleBackground />
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
