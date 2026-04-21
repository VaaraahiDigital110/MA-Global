import React from 'react';
import './About.css';

// All 4 icons are in one combined image (why-choose.png).
// background-size: 400% shows 1/4 of the image width per card.
const reasons = [
  {
    bgPos: null,
    customImg: '/globe.png',
    title: 'Global IT Infrastructure Expertise',
    desc: 'We deliver scalable and reliable IT infrastructure solutions across global markets. Our experienced team ensures seamless integration, optimized performance, and future-ready systems tailored to your business needs.',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/laptop-check.png',
    title: 'Fast Enterprise Device Deployment',
    desc: 'Accelerate your business operations with our rapid device deployment services. We streamline procurement, configuration, and delivery to ensure your teams are equipped and ready without delays ',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/shield-check.png',
    title: 'Secure Endpoint Lifecycle Management',
    desc: 'Protect your organization with end-to-end endpoint security and lifecycle management. From onboarding to decommissioning, we ensure devices remain secure, compliant, and efficiently managed at every stage.',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/asset-recovery.png',
    title: 'Sustainable IT Asset Recovery',
    desc: 'Maximize value and minimize waste with our eco-friendly IT asset recovery solutions. We help you securely dispose, recycle, and refurbish devices while maintaining compliance and supporting sustainability goals.',
    link: 'View Details',
  },
];

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="section-header">
        <h2 className="section-title-why">
          Why Choose <span className="highlight">MA Global</span>
        </h2>
      </div>

      <div className="why-grid">
        {reasons.map((item, i) => (
          <div className="why-card" key={i}>
            {item.customImg ? (
              <div className="why-img-wrap">
                <img src={item.customImg} alt={item.title} className="why-img-custom" />
              </div>
            ) : (
              <div
                className="why-img-wrap"
                style={{
                  backgroundImage: 'url(/why-choose.png)',
                  backgroundSize: '400% auto',
                  backgroundPosition: item.bgPos,
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
            <div className="why-card-body">
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
