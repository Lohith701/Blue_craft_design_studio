import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <PageContainer 
      title="Home" 
      description="Blue Craft Design Studio offers bespoke designs that elevate your home and lifestyle. Timeless, functional interiors crafted for the way you live."
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero.png')" }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="animate-fade-up">Bespoke designs that elevate your home and lifestyle.</h1>
          <p className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Timeless, functional interiors crafted for the way you live.
          </p>
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn btn-primary">Book Your Consultation</Link>
            <Link to="/projects" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Our Work</Link>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section about-snippet">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">
            <div className="about-text">
              <h2 className="h2 mb-4">Our passion for design, your vision realized</h2>
              <p className="mb-6 text-muted">
                Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it's transforming a single room or an entire home.
              </p>
              <ul className="mb-8">
                <li className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span>Creative Expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span>Client-Centered Approach</span>
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline flex items-center gap-2">
                Read More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image-wrapper">
              <img src="/images/project2.png" alt="Modern Interior Design" className="rounded-lg shadow-lg" />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="section bg-secondary key-advantages">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Our Key Advantages</h2>
            <p className="text-muted max-w-2xl mx-auto">
              From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Innovative Design Options', desc: 'Unique and innovative interior design solutions ready to go or fully customizable.' },
              { title: 'Material Transparency', desc: 'Full transparency throughout our process so you know exactly what you’re paying for.' },
              { title: 'Reasonable Price', desc: 'Best home interior price offering competitive rates without compromise.' },
              { title: 'End-to-End Service', desc: 'From initial design through final installation, we handle every step of your project.' },
              { title: 'Assured Quality', desc: 'Delivering top-notch workmanship guaranteed to impress in every project.' },
              { title: 'On-Time Delivery', desc: 'Strict adherence to timelines ensuring your dream home is ready when promised.' }
            ].map((adv, idx) => (
              <div key={idx} className="advantage-card bg-white p-6 rounded-lg shadow-sm">
                <h3 className="h4 mb-3">{adv.title}</h3>
                <p className="text-muted text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section projects-showcase">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="h2">Featured Projects</h2>
            <Link to="/projects" className="btn btn-outline flex items-center gap-2">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="project-card group">
              <div className="project-img-wrapper overflow-hidden rounded-lg">
                <img src="/images/project1.png" alt="Modern House Exterior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="project-info mt-4">
                <h3 className="h4">Modern House Exterior</h3>
                <p className="text-muted text-sm">Architecture / Exterior</p>
              </div>
            </div>
            <div className="project-card group">
              <div className="project-img-wrapper overflow-hidden rounded-lg">
                <img src="/images/project2.png" alt="Premium Kitchen Interior" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="project-info mt-4">
                <h3 className="h4">Premium Kitchen Interior</h3>
                <p className="text-muted text-sm">Interior / Kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-primary text-white process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4 text-white">Relax—We’ve Got It Covered</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive approach guides you through each phase of the design process, from initial brainstorming to final installation.
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-6 process-steps">
            {[
              { num: '01', title: 'Book Your Order', desc: 'Fill up our contact form and we’ll get right back to you.' },
              { num: '02', title: 'Design Starts', desc: 'We learn your preferences and provide a detailed cost estimation.' },
              { num: '03', title: 'Execution Phase', desc: 'Your dream interiors begin to take shape under our expert team.' },
              { num: '04', title: 'Installation Phase', desc: 'We handle delivery and installation—everything is turnkey.' }
            ].map((step, idx) => (
              <div key={idx} className="process-step text-center">
                <div className="step-num text-accent h2 mb-3">{step.num}.</div>
                <h3 className="h4 mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageContainer>
  );
};

export default Home;
