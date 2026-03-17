import React from 'react';
import './Clients.css';

const clients = [
  { name: 'Dell', abbr: 'DELL', color: '#007DB8', bg: '#E5F2FB' },
  { name: 'HP', abbr: 'HP', color: '#0096D6', bg: '#E5F4FB' },
  { name: 'Lenovo', abbr: 'LNV', color: '#E2231A', bg: '#FBEAEA' },
  { name: 'Cisco', abbr: 'CSCO', color: '#049FD9', bg: '#E5F5FC' },
  { name: 'Siemens', abbr: 'SIE', color: '#009999', bg: '#E5F5F5' },
  { name: 'Microsoft', abbr: 'MS', color: '#00A4EF', bg: '#E5F5FE' },
  { name: 'Apple', abbr: 'AAPL', color: '#555555', bg: '#F0F0F0' },
  { name: 'Samsung', abbr: 'SAM', color: '#1428A0', bg: '#EAEDF8' },
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Partners</span>
          <h2 className="section-title">Trusted by <span>Global Enterprises</span></h2>
          <p className="section-desc">
            We're proud to partner with the world's most respected technology brands — delivering genuine products with global support.
          </p>
          <div className="divider"></div>
        </div>

        <div className="clients-track-wrapper">
          <div className="clients-track">
            {[...clients, ...clients].map((client, i) => (
              <div className="client-logo" key={i} style={{ '--bg': client.bg, '--color': client.color }}>
                <div className="client-avatar">
                  <span>{client.abbr}</span>
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-cta">
          <p>Join 500+ companies that trust MA Global for their IT needs</p>
          <button className="cta-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Become Our Client
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
