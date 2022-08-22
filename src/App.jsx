import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <>
        {/* Header */}
        <Header />
        
        <Outlet />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

