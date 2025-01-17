import './App.css';
import About from './sections/About';
import Footer from './sections/Footer';
import Main from './sections/Main';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
