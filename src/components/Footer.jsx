import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-dots-bg" />
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Quick Links */}
            <div className="footer-col">
              <h4>QUICK LINKS</h4>
              <ul>
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Contact Us', id: 'contact' },
                ].map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center — Brand + Contact */}
            <div className="footer-center">
              <div className="footer-logo">
                <img src="/ma-global-logo.svg" alt="MA Global Logo" className="footer-logo-img" />
              </div>

              <div className="footer-contact-item">
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                </span>
                <span>Honest Nest, 40/A, Floor 4, Flat No 403,<br />Venkata Ramana Colony, Gokul Plots,<br />Hyderabad, Telangana, 500085</span>
              </div>

              <div className="footer-contact-item">
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </span>
                <div>
                  <a href="tel:+919951010578">+91 9951010578</a><br />
                </div>
              </div>

              <div className="footer-contact-item">
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <a href="mailto:anil@maglobal.info">anil@maglobal.info</a>
              </div>

              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="footer-col footer-col-right">
              <h4>IMPORTANT LINKS</h4>
              <ul>
                {[
                  { label: 'Products', id: 'products' },
                  { label: 'Services', id: 'services' },
                ].map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollTo(link.id)}>{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} MA Global. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span className="dot-sep">•</span>
              <span>Terms of Service</span>
              <span className="dot-sep">•</span>
              <span>Sitemap</span>
            </div>
            <p className="footer-made">Hyderabad, Telangana, India 🇮🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
