import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { id: 1, title: 'Modern House Exterior', category: 'Exterior', image: '/images/project1.png' },
    { id: 2, title: 'Premium Kitchen', category: 'Interior', image: '/images/project2.png' },
    { id: 3, title: 'Luxury Living Room', category: 'Interior', image: '/images/hero.png' },
    { id: 4, title: 'Minimalist Bedroom', category: 'Interior', image: '/images/project1.png' },
    { id: 5, title: 'Corporate Office', category: 'Commercial', image: '/images/project2.png' },
    { id: 6, title: 'Boutique Store', category: 'Commercial', image: '/images/hero.png' },
  ];

  const categories = ['All', 'Interior', 'Exterior', 'Commercial'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
          
          <div className="project-filters mb-10 flex justify-center gap-4 flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-item group animate-fade-up">
                <div className="portfolio-img-wrapper overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="portfolio-overlay flex flex-col justify-end p-6">
                    <span className="portfolio-category text-accent uppercase text-sm tracking-wider mb-2 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="portfolio-title h4 text-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </PageContainer>
  );
};

export default Projects;
