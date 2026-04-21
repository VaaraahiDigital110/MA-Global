import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
<Services />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
