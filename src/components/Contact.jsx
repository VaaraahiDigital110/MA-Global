import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Left — Form */}
          <div className="contact-form-side">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-title">Let's Start a Conversation</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="input-icon-wrap">
                      <span className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input type="text" name="name" placeholder="FULL NAME" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="input-icon-wrap">
                      <span className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </span>
                      <input type="email" name="email" placeholder="EMAIL ADDRESS" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="input-icon-wrap phone-wrap">
                      <span className="phone-prefix">
                        <span className="flag">🇮🇳</span>
                        <span>+91</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                      </span>
                      <input type="tel" name="phone" placeholder="PHONE NUMBER" value={form.phone} onChange={handleChange} className="phone-input" />
                    </div>
                    <div className="input-icon-wrap">
                      <span className="input-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                      </span>
                      <input type="text" name="subject" placeholder="SUBJECT" value={form.subject} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="input-icon-wrap textarea-wrap">
                    <span className="input-icon textarea-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    </span>
                    <textarea name="message" rows={6} placeholder="MESSAGE" value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? <span className="spinner" /> : 'SEND MESSAGE'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right — Contact Info */}
          <div className="contact-info-side">
            <div className="info-item">
              <span className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </span>
              <div>
                <p className="info-label">Address:</p>
                <p className="info-value">Honest Nest, 40/A, Floor 4, Flat No 403,<br />Venkata Ramana Colony, Gokul Plots,<br />Hyderabad, Telangana, 500085</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <span className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </span>
              <div>
                <p className="info-label">Phone:</p>
                <a href="tel:+919951010578" className="info-value link">+91 9951010578</a>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-item">
              <span className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <div>
                <p className="info-label">Email:</p>
                <a href="mailto:anil@maglobal.info" className="info-value link">anil@magloba.info</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
