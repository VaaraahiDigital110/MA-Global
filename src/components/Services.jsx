import React from 'react';
import './Services.css';

const services = [
  {
    img: '/service-endpoint.png',
    alt: 'Endpoint Management - Security Shield',
    title: 'IT Lifecycle Services',
    desc: 'We handle the complete lifecycle of servers, storage, and peripherals for seamless performance.',
  },
  {
    img: '/service-hardware.png',
    alt: 'Hardware Procurement - Server Hardware',
    title: 'Server & Storage Solutions',
    desc: 'We ensure secure and efficient server and storage management.s.',
  },
  {
    img: '/service-lifecycle.png',
    alt: 'IT Lifecycle Management - Laptop',
    title: 'Peripheral Maintenance',
    desc: 'We offer fast support for printers and other peripherals to reduce downtime.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="highlight">Services</span></h2>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              {/* Circular image */}
              <div className="service-img-wrap">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="service-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('img-fallback');
                  }}
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
