import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import HeroBanner from '../components/HeroBanner';
import { PROJECTS_DATA } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Interior', 'Foyers', 'Wallpaper', 'Murals & Paintings'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.cat.includes(filter));

  const openModal  = useCallback((project) => setActiveProject(project), []);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <PageContainer
      title="Interior Design Portfolio Bangalore | Blue Craft Projects"
      description="Explore Blue Craft's portfolio of completed interior design projects in Bangalore — living rooms, bedrooms, kitchens, wardrobes, foyers & luxury home interiors."
    >
      <HeroBanner
        eyebrow="Interior Design Services Near Me — Bangalore"
        title="Our Projects"
        subtitle="500+ homes transformed across Bangalore. Browse real work, real spaces, real results."
        bgImage="/images/hero-banner/projects-banner.webp"
      />

      <section className="section bg-secondary min-h-screen">
        <div className="container">

          {/* ── Section intro ── */}
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto 3rem' }}>
            <h2 className="h2" style={{ marginBottom: '1rem' }}>
              Luxury Interior Design in Bangalore — Delivered Across Every Room
            </h2>
            <p className="text-muted" style={{ lineHeight: '1.85' }}>
              From statement living room interiors and serene bedroom retreats to precision-engineered
              modular kitchens and hand-crafted wardrobes — every project in this portfolio was
              designed, managed, and installed entirely by the Blue Craft team in Bengaluru.
              Browse by category to find inspiration closest to your own vision.
            </p>
          </div>

          {/* ── Category filters ── */}
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn-new ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Project grid ── */}
          <div className="grid grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-item animate-fade-up"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openModal(project)}
                aria-label={`View ${project.title} gallery`}
              >
                <div className="portfolio-img-wrapper">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} interior design in Bangalore by Blue Craft`}
                    className="portfolio-img"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-cat">{project.cat}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Trust strip ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '3rem',
              marginTop: '4.5rem',
              padding: '2.5rem 2rem',
              background: 'var(--white)',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {[
              { num: '500+', label: 'Homes Designed in Bangalore' },
              { num: '15+',  label: 'Years of Interior Design Excellence' },
              { num: '10',   label: 'Year Workmanship Warranty' },
              { num: '100%', label: 'Client Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '0.4rem', maxWidth: '130px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Looking for interior design services near you in Bangalore?
              Let&apos;s start with a free consultation.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ gap: '0.6rem' }}>
              Book a Free Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* ── Project Modal ── */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </PageContainer>
  );
};

export default Projects;
