import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <img src="/hero-main.png" alt="MA Global" className="hero-img" />
      <div className="hero-btns">
        <button className="btn-primary" onClick={() => scrollTo('services')}>
          Explore Services
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
