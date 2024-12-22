import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/OrderPage';
// import About from './About';
// import Contact from './Contact';
import Catering from './Components/Catering/Catering';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/catering" element={<Catering />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         */}
      </Routes>
    </Router>
  );
}

export default App;