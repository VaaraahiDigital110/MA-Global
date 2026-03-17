import React from 'react';
import './Partners.css';

const Partners = () => (
  <section className="partners-section">
    <div className="partners-container">
      <p className="partners-heading">
        Trusted by <strong>Global Enterprises</strong>
      </p>
      <div className="brands-row">

        {/* DELL */}
        <div className="brand-item">
          <span className="brand-dell">D<span className="dell-e">E</span>LL</span>
        </div>

        {/* HP */}
        <div className="brand-item">
          <span className="brand-hp-wrap">
            <span className="brand-hp">hp</span>
          </span>
        </div>

        {/* Lenovo */}
        <div className="brand-item">
          <span className="brand-lenovo">Lenovo.</span>
        </div>

        {/* Cisco */}
        <div className="brand-item brand-cisco-wrap">
          <span className="cisco-dots">
            <span/><span/><span/><span/><span/>
            <span/><span/><span/><span/><span/>
          </span>
          <span className="brand-cisco">CISCO.</span>
        </div>

        {/* Siemens */}
        <div className="brand-item">
          <span className="brand-siemens">SIEMENS</span>
        </div>

        {/* Peendal */}
        <div className="brand-item">
          <span className="brand-peendal">PEENDAL</span>
        </div>

      </div>
    </div>
  </section>
);

export default Partners;
