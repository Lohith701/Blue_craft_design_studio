import React from 'react';
import PageContainer from '../components/PageContainer';
import { Home, Layout, PaintBucket, Briefcase, Ruler, Compass } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      desc: 'Complete interior design services for homes, apartments, and villas tailored to your personal style and needs.'
    },
    {
      icon: Briefcase,
      title: 'Commercial Design',
      desc: 'Functional and aesthetic workspaces, retail stores, and hospitality environments that enhance your brand identity.'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      desc: 'Optimizing layouts to ensure maximum functionality, flow, and efficiency in every square foot of your property.'
    },
    {
      icon: PaintBucket,
      title: 'Color Consultation',
      desc: 'Expert advice on color palettes, materials, and finishes to create the perfect mood and atmosphere.'
    },
    {
      icon: Ruler,
      title: 'Custom Furniture',
      desc: 'Bespoke furniture design and fabrication perfectly proportioned for your unique space and style requirements.'
    },
    {
      icon: Compass,
      title: 'Project Management',
      desc: 'End-to-end supervision of the execution phase, ensuring quality, timely delivery, and budget adherence.'
    }
  ];

  return (
    <PageContainer 
      title="Services" 
      description="Explore our comprehensive range of interior design and property services, including residential, commercial, and bespoke custom furniture."
    >
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="h1 text-white animate-fade-up">Our Services</h1>
          <p className="text-gray-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive design solutions for every space and requirement.
          </p>
        </div>
      </div>

      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="service-card bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="service-icon-wrapper mb-6 mx-auto">
                  <srv.icon size={36} className="text-accent" />
                </div>
                <h3 className="h4 mb-4">{srv.title}</h3>
                <p className="text-muted mb-6">{srv.desc}</p>
                <a href="/contact" className="btn btn-outline text-sm">Enquire Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-xl text-center cta-section relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="h2 text-white mb-4">Ready to start your project?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our design experts and take the first step towards transforming your space.
              </p>
              <a href="/contact" className="btn btn-primary bg-white text-primary hover:bg-accent hover:text-white border-white">
                Book Consultation
              </a>
            </div>
            {/* Decorative circles */}
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Services;
