import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Home, Layout, PaintBucket, Briefcase, Ruler, Compass, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      desc: 'Complete interior design services for homes, apartments, and villas tailored to your personal style and needs.',
    },
    {
      icon: Briefcase,
      title: 'Commercial Design',
      desc: 'Functional and aesthetic workspaces, retail stores, and hospitality environments that enhance your brand identity.',
    },
    {
      icon: Layout,
      title: 'Space Planning',
      desc: 'Optimizing layouts to ensure maximum functionality, flow, and efficiency in every square foot of your property.',
    },
    {
      icon: PaintBucket,
      title: 'Color Consultation',
      desc: 'Expert advice on color palettes, materials, and finishes to create the perfect mood and atmosphere.',
    },
    {
      icon: Ruler,
      title: 'Custom Furniture',
      desc: 'Bespoke furniture design and fabrication perfectly proportioned for your unique space and style requirements.',
    },
    {
      icon: Compass,
      title: 'Project Management',
      desc: 'End-to-end supervision of the execution phase, ensuring quality, timely delivery, and budget adherence.',
    },
  ];

  return (
    <PageContainer
      title="Services"
      description="Explore our comprehensive range of interior design and property services, including residential, commercial, and bespoke custom furniture."
    >
      <HeroBanner
        eyebrow="What We Do"
        title="Services"
        subtitle="Comprehensive design solutions for every space and requirement."
        bgImage="/images/hero-banner/services-banner.jpeg"
      />

      <section className="section services-grid-section">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <div key={idx} className="service-card-new">
                <div className="service-icon-new">
                  <srv.icon size={42} strokeWidth={1.5} />
                </div>
                <h3 className="service-title-new">{srv.title}</h3>
                <p className="service-desc-new">{srv.desc}</p>
                <div className="service-btn-wrap">
                  {/* Use Link for client-side navigation — no full page reload */}
                  <Link to="/contact" className="service-btn-new">
                    Enquire Now <ArrowRight size={18} className="arrow-icon" />
                  </Link>
                </div>
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
                Schedule a free consultation with our design experts and take the first
                step towards transforming your space.
              </p>
              {/* Link for client-side navigation */}
              <Link
                to="/contact"
                className="btn btn-primary bg-white text-primary border-white"
                style={{ color: 'var(--primary)' }}
              >
                Book Consultation
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="circle circle-1" />
            <div className="circle circle-2" />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Services;
