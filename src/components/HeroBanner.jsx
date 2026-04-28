import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ eyebrow, title, subtitle, bgImage }) => {
  // Generate 10 particles with specific requirements
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    duration: `${6.5 + Math.random() * 3}s`, // 6.5s–9.5s
    delay: `${Math.random() * 4.6}s`, // 0s–4.6s
  }));

  return (
    <div className="hero-banner">
      <div 
        className="bg" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="overlay"></div>
      <div className="vignette"></div>
      
      <div className="particles">
        {particles.map((p, i) => (
          <span 
            key={i} 
            style={{ 
              left: p.left, 
              animationDuration: p.duration, 
              animationDelay: p.delay 
            }}
          ></span>
        ))}
      </div>

      <div className="c tl"></div>
      <div className="c tr"></div>
      <div className="c bl"></div>
      <div className="c br"></div>

      <div className="content">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <div className="sub">{subtitle}</div>}
        <div className="gold-bar"></div>
      </div>

      <div className="bline"></div>
    </div>
  );
};

export default HeroBanner;
