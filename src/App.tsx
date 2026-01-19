import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';
import Home from './pages/home/home';
import AboutUs from './pages/about-us';
import './index.css';
import Teleradiology from './pages/teleradiology';
import Careers from './pages/careers';
import Product from './pages/product';
import Portfolio from './pages/portfolio';
import Radone from './pages/portfolio/radone';
import RadLinQ from './pages/portfolio/radlinq';
import InvoiceIQ from './pages/portfolio/invoiceiq';
import Blog from './pages/blog';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import ScrollToTop from './components/common/scroll-to-top';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/radone" element={<Radone />} />
          <Route path="/portfolio/radlinq" element={<RadLinQ />} />
          <Route path="/portfolio/invoiceiq" element={<InvoiceIQ />} />
          <Route path="/teleradiology" element={<Teleradiology />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
