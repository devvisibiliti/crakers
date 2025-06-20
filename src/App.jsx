import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Invoice from './components/Invoice';
import Header from '../src/components/Header';
import './index.css'; // or './main.css' if that's what you're using
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
