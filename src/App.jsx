import { Outlet } from 'react-router-dom';
import Header from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
        {/* Header */}
        <Header />
        <Outlet />
        {/* Footer */}
        <Footer />
    </>
  );
}

export default App;

