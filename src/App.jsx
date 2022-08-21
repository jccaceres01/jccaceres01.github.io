import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

