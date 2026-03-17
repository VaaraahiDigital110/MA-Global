import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { num: 20, suffix: '+', label: 'Years of Experience', icon: '📅' },
  { num: 500, suffix: '+', label: 'Satisfied Clients', icon: '😊' },
  { num: 1000, suffix: '+', label: 'Projects Delivered', icon: '✅' },
  { num: 10, suffix: '+', label: 'Brand Partners', icon: '🤝' },
  { num: 98, suffix: '%', label: 'Customer Satisfaction', icon: '⭐' },
  { num: 3, suffix: '', label: 'Segments Served', icon: '🏢' },
];

const useCountUp = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatItem = ({ stat, animate }) => {
  const count = useCountUp(stat.num, 1800, animate);
  return (
    <div className="stat-item">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-num">
        {animate ? count : 0}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

const Stats = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg"></div>
      <div className="container">
        <div className="stats-header">
          <h2>Our Impact in Numbers</h2>
          <p>Two decades of delivering excellence across India's IT landscape</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
