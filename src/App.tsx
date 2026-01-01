import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';
import Home from './pages/home/home';
import AboutUs from './pages/about-us';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import './index.css';
import Teleradiology from './pages/teleradiology';
import Careers from './pages/careers';
import ScrollToTop from './components/common/scroll-to-top';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teleradiology" element={<Teleradiology />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
