import React from 'react';
import PageContainer from '../components/PageContainer';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <PageContainer 
      title="About Us" 
      description="Learn about Blue Craft Design Studio, our vision, and the passionate team behind our premium interior designs."
    >
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="h1 text-white animate-fade-up">About Our Company</h1>
          <p className="text-gray-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Designing spaces that inspire and elevate everyday living.
          </p>
        </div>
      </div>

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
                  <span className="stat-num text-accent">15+</span>
                  <span className="stat-text">Years Experience</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent">500+</span>
                  <span className="stat-text">Projects Completed</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent">100%</span>
                  <span className="stat-text">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="about-images grid grid-cols-2 gap-4">
              <img src="/images/project1.png" alt="Office Space" className="rounded-lg object-cover h-full" />
              <img src="/images/project2.png" alt="Design Process" className="rounded-lg object-cover h-full mt-8" />
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
