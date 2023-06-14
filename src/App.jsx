import './App.css';

import Header from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
        {/* Header */}
        <Header />
        {/* Landing */}
        <Home />
        {/* About */}
        <About />
        {/*  Skills */}
        <Skills />
        {/* Contacts */}
        <Contact />
        {/* Footer */}
        <Footer />
    </>
  );
}

export default App;

