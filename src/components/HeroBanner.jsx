import React from 'react';
import './HeroBanner.css';

// Generate particles once outside component to prevent re-renders
const PARTICLES = Array.from({ length: 10 }).map(() => ({
  left: `${Math.random() * 100}%`,
  duration: `${6.5 + Math.random() * 3}s`,
  delay: `${Math.random() * 4.6}s`,
}));

const HeroBanner = ({ eyebrow, title, subtitle, bgImage }) => {
  return (
    <div className="hero-banner">
      <picture>
        <source media="(max-width: 768px)" srcSet={bgImage.replace('.webp', '-mobile.webp')} />
        <img 
          className="bg" 
          src={bgImage} 
          alt={title} 
          width="1920" 
          height="600" 
          fetchpriority="high" 
        />
      </picture>
      <div className="overlay"></div>
      <div className="vignette"></div>
      
      <div className="particles">
        {PARTICLES.map((p, i) => (
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
