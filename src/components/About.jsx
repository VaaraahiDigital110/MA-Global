import React from 'react';
import './About.css';

// All 4 icons are in one combined image (why-choose.png).
// background-size: 400% shows 1/4 of the image width per card.
const reasons = [
  {
    bgPos: null,
    customImg: '/globe.png',
    title: 'Global IT Infrastructure Expertise',
    desc: 'Eed nomence regeport on enrestant everting alfiec diti ciiillible hitefurmclust adinab natque conlim on latem adiel-',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/laptop-check.png',
    title: 'Fast Enterprise Device Deployment',
    desc: 'Freent paur ornemose adot cuternn dlicely nlandeinnese decify management ala p00-ons coconsecteturque, 5098 Plige Latis',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/shield-check.png',
    title: 'Secure Endpoint Lifecycle Management',
    desc: 'Taciit your seientem Faieevern litrant the tentope condiliam ferrutiaire df-the guis oey managernem permantainalls.',
    link: 'Learn More',
  },
  {
    bgPos: null,
    customImg: '/asset-recovery.png',
    title: 'Sustainable IT Asset Recovery',
    desc: 'SCG gethesgu ed emit-ht to consttarbiliey decept occas-cicoler (ufffuse entd oppins nur mesiderentozed copni leg outoutt. nouls.',
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
