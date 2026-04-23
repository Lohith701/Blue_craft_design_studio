import React, { useState, useCallback } from 'react';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Modern Kitchen',
    cat:   'Interior / Kitchen',
    images: ['/images/project2.png', '/images/project1.png', '/images/project2.png'],
  },
  {
    id: 2,
    title: 'Living Room Design',
    cat:   'Interior / Living',
    images: ['/images/project1.png', '/images/project2.png', '/images/project1.png'],
  },
  {
    id: 3,
    title: 'Master Bedroom',
    cat:   'Interior / Bedroom',
    images: ['/images/project2.png', '/images/project1.png'],
  },
  {
    id: 4,
    title: 'Modern Exterior',
    cat:   'Exterior / Architecture',
    images: ['/images/project1.png', '/images/project2.png', '/images/project1.png'],
  },
  {
    id: 5,
    title: 'Luxury Bathroom',
    cat:   'Interior / Bath',
    images: ['/images/project2.png', '/images/project1.png'],
  },
  {
    id: 6,
    title: 'Minimalist Dining',
    cat:   'Interior / Dining',
    images: ['/images/project1.png', '/images/project2.png'],
  },
  {
    id: 7,
    title: 'Corporate Office',
    cat:   'Commercial / Office',
    images: ['/images/project2.png', '/images/project1.png'],
  },
  {
    id: 8,
    title: 'Boutique Store',
    cat:   'Commercial / Retail',
    images: ['/images/hero.png', '/images/project1.png'],
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Interior', 'Exterior', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.cat.includes(filter));

  const openModal = useCallback((project) => {
    setActiveProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <PageContainer 
      title="Projects" 
      description="Browse our portfolio of completed residential and commercial interior design projects."
    >
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="h1 text-white animate-fade-up">Our Projects</h1>
          <p className="text-gray-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A showcase of our finest design and execution work.
          </p>
        </div>
      </div>

      <section className="section bg-secondary min-h-screen">
        <div className="container">
          
          <div className="project-filters">
            {categories.map(cat => (
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
              >
                <div className="portfolio-img-wrapper">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="portfolio-img" 
                  />
                  <div className="portfolio-overlay">
                    <span className="portfolio-view-label">View Gallery</span>
                  </div>
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
