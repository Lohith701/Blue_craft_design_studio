import React, { useState, useCallback } from 'react';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import HeroBanner from '../components/HeroBanner';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Cots',
    cat: 'Interior / Bedroom',
    images: [
      '/images/cots/cot (1).jpeg',
      '/images/cots/cot (2).jpeg',
      '/images/cots/cot (3).jpeg',
      '/images/cots/cot (4).jpeg',
      '/images/cots/cot (5).jpeg',
      '/images/cots/cot (6).jpeg',
    ],
  },
  {
    id: 2,
    title: 'False ceiling',
    cat: 'Interior / Ceiling',
    images: [
      '/images/falseCeiling/fc (1).jpeg',
      '/images/falseCeiling/fc (2).jpeg',
      '/images/falseCeiling/fc (3).jpeg',

    ],
  },
  {
    id: 3,
    title: 'Foyers',
    cat: 'Interior / Foyer',
    images: [
      '/images/foyers/foyers (1).jpeg',
      '/images/foyers/foyers (2).jpeg',
      '/images/foyers/foyers (3).jpeg',
      '/images/foyers/foyers (4).jpeg',
      '/images/foyers/foyers (5).jpeg',
    ],
  },
  {
    id: 4,
    title: 'Kids bedroom',
    cat: 'Interior / Bedroom',
    images: [
      '/images/kidsBedroom/kids (1).jpeg',
      '/images/kidsBedroom/kids (2).jpeg',
      '/images/kidsBedroom/kids (3).jpeg',
      '/images/kidsBedroom/kids (4).jpeg',
      '/images/kidsBedroom/kids (5).jpeg',
      '/images/kidsBedroom/kids (6).jpeg',
      '/images/kidsBedroom/kids (7).jpeg',
    ],
  },
  {
    id: 5,
    title: 'Kitchens',
    cat: 'Interior / Kitchen',
    images: [
      '/images/kitchens/kitchen (1).jpeg',
      '/images/kitchens/kitchen (2).jpeg',
      '/images/kitchens/kitchen (3).jpeg',
      '/images/kitchens/kitchen (4).jpeg',
      '/images/kitchens/kitchen (5).jpeg',
      '/images/kitchens/kitchen (6).jpeg',
    ],
  },
  {
    id: 6,
    title: 'Living',
    cat: 'Interior / Living',
    images: [
      '/images/living/living (1).jpeg',
      '/images/living/living (2).jpeg',
      '/images/living/living (3).jpeg',
      '/images/living/living (4).jpeg',
      '/images/living/living (5).jpeg',
      '/images/living/living (6).jpeg',
    ],
  },
  {
    id: 7,
    title: 'Murals & Paintings',
    cat: 'Interior / Decor',
    images: [
      '/images/muralsPaintings/mural (1).jpeg',
      '/images/muralsPaintings/mural (2).jpeg',
      '/images/muralsPaintings/mural (3).jpeg',
      '/images/muralsPaintings/mural (4).jpeg',
      '/images/muralsPaintings/mural (5).jpeg',
      '/images/muralsPaintings/mural (6).jpeg',
    ],
  },
  {
    id: 8,
    title: 'Pooja unit',
    cat: 'Interior / Pooja',
    images: [
      '/images/poojaUnit/pooja (1).jpeg',
      '/images/poojaUnit/pooja (2).jpeg',
      '/images/poojaUnit/pooja (3).jpeg',
      '/images/poojaUnit/pooja (4).jpeg',

    ],
  },
  {
    id: 9,
    title: 'Wallpaper',
    cat: 'Interior / Decor',
    images: [
      '/images/wallpaper/wall (1).jpeg',
      '/images/wallpaper/wall (2).jpeg',
      '/images/wallpaper/wall (3).jpeg',
      '/images/wallpaper/wall (4).jpeg',
      '/images/wallpaper/wall (5).jpeg',

    ],
  },
  {
    id: 10,
    title: 'Wardobe',
    cat: 'Interior / Wardrobe',
    images: [
      '/images/wardrobe/wardrobe (1).jpeg',
      '/images/wardrobe/wardrobe (2).jpeg',
      '/images/wardrobe/wardrobe (3).jpeg',
      '/images/wardrobe/wardrobe (4).jpeg',
      '/images/wardrobe/wardrobe (5).jpeg',
      '/images/wardrobe/wardrobe (6).jpeg',
      '/images/wardrobe/wardrobe (7).jpeg',
      '/images/wardrobe/wardrobe (8).jpeg',
    ],
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
      <HeroBanner 
        eyebrow="Our Portfolio"
        title="Projects"
        subtitle="A showcase of our finest design and execution work."
        bgImage="/images/hero-banner/projects-banner.jpeg"
      />

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
