import React, { useState, useEffect, useRef } from 'react';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';
import './About.css';

const Counter = ({ end, duration, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(end);
              setFinished(true);
            }
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={`inline-block ${finished ? 'count-finished' : ''}`}>
      {prefix}{count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <PageContainer
      title="About Us"
      description="Learn about Blue Craft Design Studio, our vision, and the passionate team behind our premium interior designs."
    >
      <HeroBanner 
        eyebrow="Who We Are"
        title="About Us"
        subtitle="Designing spaces that inspire and elevate everyday living."
        bgImage="/images/hero-banner/about-banner.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="about-content">
              <h2 className="h2 mb-6">We turn your vision into reality</h2>
              <p className="mb-4 text-muted">
                Blue Craft Design Studio was founded with a singular vision: to create bespoke interiors that seamlessly blend functionality with timeless aesthetics. With over 15 years of experience in the industry, we have transformed countless homes and commercial spaces across Bangalore.
              </p>
              <p className="mb-6 text-muted">
                Our team of dedicated architects and interior designers is committed to delivering excellence. From initial consultation to final installation, we ensure a smooth, transparent, and enjoyable process for our clients.
              </p>

              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={15} suffix="+" duration={1500} /></span>
                  <span className="stat-text">Years Experience</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={500} suffix="+" duration={2000} /></span>
                  <span className="stat-text">Projects Completed</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={100} suffix="%" duration={1800} /></span>
                  <span className="stat-text">Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="about-images grid grid-cols-2 gap-4">
              <img src="/images/about1.jpeg" alt="Office Space" className="rounded-lg object-cover h-full" />
              <img src="/images/about2.jpeg" alt="Design Process" className="rounded-lg object-cover h-full mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="h2 mb-12">Our Core Values</h2>
          <div className="core-values-grid">
            {[
              { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail in every aspect of design and execution.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Constantly exploring new materials, trends, and sustainable practices.' },
              { icon: Users, title: 'Collaboration', desc: 'Working closely with clients to ensure their personality shines through.' },
              { icon: Shield, title: 'Integrity', desc: 'Transparent pricing and honest communication from start to finish.' },
            ].map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-wrap">
                  <val.icon size={28} />
                </div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageContainer>
  );
};

export default About;
