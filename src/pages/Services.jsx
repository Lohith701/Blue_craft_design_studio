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
      title: 'Full Home Interior Design',
      desc: 'Our flagship home interior design service in Bengaluru covers every room, every surface, and every detail — from living spaces and bedrooms to kitchens, bathrooms, and utility areas. We handle design, sourcing, fabrication, and installation as a single turnkey package, so you move into a finished home without the stress of coordinating multiple vendors.',
    },
    {
      icon: Ruler,
      title: 'Modular Kitchens Bangalore',
      desc: 'The kitchen is the heart of every home, and our modular kitchen designs are built to match the way Bangalore families live and cook. Choose from L-shaped, U-shaped, parallel, or island configurations — each crafted with premium shutters, soft-close fittings, and durable laminates. Every modular kitchen we install comes with a 10-year warranty.',
    },
    {
      icon: Layout,
      title: 'Modular Wardrobes & Storage',
      desc: 'Our modular wardrobe solutions make the most of every square foot in your Bangalore home. Sliding doors, walk-ins, loft units, and corner wardrobes — all custom-built to your exact dimensions and finished to match your room\'s aesthetic. Internal configurations include drawers, soft-close channels, trouser rails, and dedicated accessory zones.',
    },
    {
      icon: Briefcase,
      title: 'False Ceilings & Lighting Design',
      desc: 'A well-designed ceiling transforms the entire character of a room. Our false ceiling services in Bengaluru cover plasterboard, POP, and wooden ceiling designs integrated with ambient, task, and accent lighting plans. Every project is engineered for both aesthetics and energy efficiency.',
    },
    {
      icon: PaintBucket,
      title: 'Textured Walls, Wallpaper & Murals',
      desc: 'Walls are canvases, not afterthoughts. We offer a curated range of textured wall finishes, premium imported wallpapers, and hand-painted murals that bring personality and depth to your interiors. Whether you prefer the restraint of minimalist design or the warmth of layered luxury, we have a wall treatment for every vision.',
    },
    {
      icon: Compass,
      title: 'End-to-End Project Management',
      desc: 'Coordinating a home renovation in Bangalore is complex. With Blue Craft, you have a single point of contact managing every vendor, timeline, and quality check. You receive weekly progress updates, are consulted on every key decision, and we do not close the project until you sign off on every detail.',
    },
  ];

  return (
    <PageContainer
      title="Home Interior Design Services Bengaluru | Blue Craft"
      description="Blue Craft Design Studio offers complete home interior design services in Bengaluru — modular kitchens, wardrobes, false ceilings & full home interiors. Get a free quote."
    >
      <HeroBanner
        eyebrow="Home Interior Design Services Bengaluru"
        title="What We Do"
        subtitle="Modular interiors, full home design, and turnkey execution — all under one roof in Bangalore."
        bgImage="/images/hero-banner/services-banner.webp"
      />

      {/* ── Services Grid ── */}
      <section className="section services-grid-section">
        <div className="container">

          {/* Section intro */}
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Our Services
            </span>
            <h2 className="h2" style={{ marginBottom: '1rem' }}>
              Comprehensive Interior Design Services in Bengaluru
            </h2>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              From a single modular kitchen to a complete home transformation, every service we offer
              is delivered with the same standard: exceptional design, quality materials, and
              workmanship that stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <div key={idx} className="service-card-new">
                <div className="service-icon-new">
                  <srv.icon size={42} strokeWidth={1.5} />
                </div>
                <h3 className="service-title-new">{srv.title}</h3>
                <p className="service-desc-new">{srv.desc}</p>
                <div className="service-btn-wrap">
                  <Link to="/contact" className="service-btn-new">
                    Get a Free Quote <ArrowRight size={18} className="arrow-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section">
        <div className="container">
          <div className="bg-primary text-white p-12 rounded-xl text-center cta-section relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="h2 text-white mb-4">
                Ready to Transform Your Bangalore Home?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Talk to one of our senior interior designers in Bangalore today. The first
                consultation is completely free — no obligations, no sales pressure.
                Just honest advice about your space and what it could become.
              </p>
              <Link
                to="/contact"
                className="btn btn-primary bg-white text-primary border-white"
                style={{ color: 'var(--primary)' }}
              >
                Book Your Free Consultation
              </Link>
            </div>
            <div className="circle circle-1" />
            <div className="circle circle-2" />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Services;
