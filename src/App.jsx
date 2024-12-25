import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/OrderPage';
import ScrollToTop from './Components/ui/ScrollToTop';
// import About from './About';
import Contact from './Components/ContactUs/ContactUs';
import Catering from './Components/Catering/Catering';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/catering" element={<Catering />} />
        {/*<Route path="/about" element={<About />} />*/
        <Route path="/contact" element={<Contact />} />
         }
      </Routes>
    </Router>
  );
}

export default App;