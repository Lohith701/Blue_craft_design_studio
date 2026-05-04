import React, { useState, useCallback } from 'react';
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
      title="Projects"
      description="Browse our portfolio of completed residential and commercial interior design projects in Bangalore."
    >
      <HeroBanner
        eyebrow="Our Portfolio"
        title="Projects"
        subtitle="A showcase of our finest design and execution work."
        bgImage="/images/hero-banner/projects-banner.jpeg"
      />

      <section className="section bg-secondary min-h-screen">
        <div className="container">

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
                    alt={`${project.title} interior design by Blue Craft`}
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
