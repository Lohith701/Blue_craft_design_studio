import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import { ArrowRight, CheckCircle2, LayoutDashboard, Eye, Tag, Layers, Award, Clock, Star } from 'lucide-react';
import './Home.css';

/* ── Project data with multiple images per project ── */
const PROJECTS = [
  {
    title: 'Modern Kitchen',
    cat:   'Interior / Kitchen',
    images: ['/images/project2.png', '/images/project1.png', '/images/project2.png'],
  },
  {
    title: 'Living Room Design',
    cat:   'Interior / Living',
    images: ['/images/project1.png', '/images/project2.png', '/images/project1.png'],
  },
  {
    title: 'Master Bedroom',
    cat:   'Interior / Bedroom',
    images: ['/images/project2.png', '/images/project1.png'],
  },
  {
    title: 'Modern Exterior',
    cat:   'Architecture / Exterior',
    images: ['/images/project1.png', '/images/project2.png', '/images/project1.png'],
  },
  {
    title: 'Luxury Bathroom',
    cat:   'Interior / Bath',
    images: ['/images/project2.png', '/images/project1.png'],
  },
  {
    title: 'Minimalist Dining',
    cat:   'Interior / Dining',
    images: ['/images/project1.png', '/images/project2.png'],
  },
  {
    title: 'Home Office Setup',
    cat:   'Interior / Office',
    images: ['/images/project2.png', '/images/project1.png'],
  },
];

/* ── Testimonial data ── */
const TESTIMONIALS = [
  {
    name: 'Shambhuprasad - Geethika',
    location: 'Bangalore',
    img: '/images/project1.png', /* Just using project images as fallback since no real avatars are present */
    rating: 5,
    text: "Wonderful decision, amazing work delivered.",
  },
  {
    name: 'Mohan - Jyothi',
    location: 'Bangalore',
    img: '/images/project2.png',
    rating: 5,
    text: "High-quality work and timely responses.",
  },
  {
    name: 'Venki - Devi',
    location: 'Bangalore',
    img: '/images/project1.png',
    rating: 5,
    text: "Great design options and smooth experience.",
  },
  {
    name: 'Dhamodhar - Navaneetha',
    location: 'Bangalore',
    img: '/images/project2.png',
    rating: 5,
    text: "Wonderful decision, amazing work delivered.",
  },
  {
    name: 'Vikram - Anjali',
    location: 'Bangalore',
    img: '/images/project1.png',
    rating: 5,
    text: "Very professional team. The best interior designers in Bangalore!",
  },
  {
    name: 'Arjun - Neha',
    location: 'Bangalore',
    img: '/images/project2.png',
    rating: 5,
    text: "They utilized our space so efficiently without making it feel cluttered.",
  }
];

/* ── helper: animate a number from `from` to `to` over `duration` ms ── */
function animateCount(from, to, duration, setter) {
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    setter(Math.floor(eased * (to - from) + from));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const CIRC = 2 * Math.PI * 45; // SVG circle circumference (r=45)

const Home = () => {
  const aboutRef = useRef(null);
  const [inView, setInView]               = useState(false);
  const [yearsCount, setYearsCount]       = useState(0);
  const [satisfCount, setSatisfCount]     = useState(0);
  const [yearsReady, setYearsReady]       = useState(false);

  /* ── Modal state ── */
  const [activeProject, setActiveProject] = useState(null); // null = closed
  const openModal  = useCallback((project) => setActiveProject(project), []);
  const closeModal = useCallback(() => setActiveProject(null), []);

  // Intersection observer — fires once when section is 30% visible
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          animateCount(0, 95, 1800, setSatisfCount);
          animateCount(0, 15, 1500, (v) => {
            setYearsCount(v);
            if (v === 15) setYearsReady(true); // fire bounce at the end
          });
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // stroke offset for SVG ring
  const strokeOffset = CIRC - (satisfCount / 100) * CIRC;

  return (
    <PageContainer
      title="Home"
      description="Blue Craft Design Studio offers bespoke designs that elevate your home and lifestyle. Timeless, functional interiors crafted for the way you live."
    >
      {/* ── Hero ── */}
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

      {/* ── About Snippet ── */}
      <section className="section about-snippet" ref={aboutRef}>
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-8">

            {/* Left – text */}
            <div className="about-text">
              <span className="about-eyebrow">About Blue Craft</span>
              <h2 className="h2 about-heading">Our passion for design, your vision realized</h2>
              <p className="about-desc text-muted">
                Our dedicated team of designers works closely with you to understand your
                vision and bring it to life with thoughtful attention to detail. Whether
                it's transforming a single room or an entire home.
              </p>
              {/* Checklist + Button on same row */}
              <div className="about-cta-row">
                <ul className="about-checklist">
                  <li>
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>Creative Expertise</span>
                  </li>
                  <li>
                    <CheckCircle2 className="text-accent" size={20} />
                    <span>Client-Centered Approach</span>
                  </li>
                </ul>
                <Link to="/about" className="btn btn-primary btn-pill">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right – collage layout matching reference */}
            <div className="about-visuals">

              {/* Large image — top-left */}
              <div className={`about-img-primary ${inView ? 'shine-active' : ''}`}>
                <img src="/images/project2.png" alt="Premium Kitchen Interior" />
              </div>

              {/* Smaller image — bottom-right */}
              <div className={`about-img-secondary ${inView ? 'shine-active' : ''}`}>
                <img src="/images/project1.png" alt="Modern Exterior Design" />
              </div>

              {/* 15+ circle badge — overlapping the two images */}
              <div className={`experience-badge ${yearsReady ? 'badge-bounce' : ''}`}>
                <span className="years">{yearsCount}+</span>
                <span className="badge-label">Years Of<br/>Experience</span>
              </div>

              {/* Right edge: vertical label + 95% ring */}
              <div className="stat-right-panel">
                <span className="positive-feedback-text">Positive Feedback</span>
                <div className="stat-ring-badge">
                  <svg viewBox="0 0 100 100" className="stat-ring-svg">
                    <circle cx="50" cy="50" r="42" fill="none"
                      stroke="rgba(25,35,36,0.15)" strokeWidth="7" />
                    <circle cx="50" cy="50" r="42" fill="none"
                      stroke="var(--primary)" strokeWidth="7"
                      strokeLinecap="round"
                      strokeDasharray={CIRC}
                      strokeDashoffset={strokeOffset}
                      transform="rotate(-90 50 50)"
                      style={{ transition: 'stroke-dashoffset 0.05s linear' }}
                    />
                  </svg>
                  <span className="stat-ring-num">{satisfCount}%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Key Advantages ── */}
      <section className="section key-advantages">
        <div className="container">

          {/* Eyebrow + heading sit above the 2-column grid */}
          <span className="advantages-eyebrow">Why Choose Blue Craft In Bangalore</span>
          <h2 className="h2 advantages-heading">Our Key Advantages</h2>

          {/* 2-column grid starts at the subtitle line */}
          <div className="advantages-layout">

            {/* Left: subtitle + feature list */}
            <div className="advantages-left">
              <p className="advantages-subtitle text-muted">
                From concept to completion, discover how we bring your vision to life
                with innovation, collaboration, and expert craftsmanship.
              </p>

              <div className="advantages-list">
                {[
                  { icon: LayoutDashboard, title: 'Innovative Design Options',
                    desc: 'Blue Craft offers unique and innovative interior design solutions that are ready to go as well as completely customizable.' },
                  { icon: Eye, title: 'Material Transparency',
                    desc: "We provide full transparency throughout our process so you know exactly what you're paying for." },
                  { icon: Tag, title: 'Reasonable Price',
                    desc: 'If you need the best home interior price in Bangalore, Blue Craft offers competitive rates without compromise.' },
                  { icon: Layers, title: 'End-To-End Service',
                    desc: 'From initial design through final installation, we handle every step of your project in Sarjapur Road, Whitefield, HSR Layout and beyond.' },
                  { icon: Award, title: 'Assured Quality',
                    desc: "Whether it's a 2BHK or a 4BHK, we deliver top-notch workmanship guaranteed to impress." },
                ].map((adv, idx) => (
                  <div key={idx} className="advantage-item">
                    <div className="adv-icon-circle">
                      <adv.icon size={20} />
                    </div>
                    <div className="adv-content">
                      <h3 className="adv-title">{adv.title}</h3>
                      <p className="adv-desc text-muted">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: asymmetric image layout */}
            <div className="advantages-images">
              <div className="adv-img-card">
                <img src="/images/project2.png" alt="Kitchen Interior" />
              </div>
              <div className="adv-img-card">
                <img src="/images/project1.png" alt="Modern Exterior" />
              </div>
              <div className="adv-img-card">
                <img src="/images/project1.png" alt="Living Room" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Projects Showcase ── */}
      <section className="section projects-showcase">
        <div className="container">

          {/* Header row */}
          <div className="projects-header">
            <div>
              <span className="projects-eyebrow">Projects</span>
              <h2 className="h2 projects-heading">Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-outline gap-2">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          {/* Marquee slider — seamless infinite scroll */}
          <div className="projects-marquee-wrap">
            <div className="projects-marquee-track">
              {[...PROJECTS, ...PROJECTS].map((p, idx) => (
                <div
                  key={idx}
                  className="proj-card"
                  onClick={() => openModal(p)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(p)}
                  aria-label={`Open gallery for ${p.title}`}
                >
                  <div className="proj-img-wrap">
                    <img src={p.images[0]} alt={p.title} />
                    <div className="proj-overlay">
                      <span className="proj-view-label">View Gallery</span>
                    </div>
                  </div>
                  <div className="proj-info">
                    <h3 className="proj-title">{p.title}</h3>
                    <p className="proj-cat text-muted">{p.cat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Project Modal ── */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}

      {/* ── Process ── */}
      <section className="section bg-secondary process-section">
        <div className="container">
          <div className="text-center mb-14">
            <span className="process-label">How It Works</span>
            <h2 className="h2 mb-4">Relax&mdash;We&apos;ve Got It Covered</h2>
            <p className="text-muted max-w-2xl mx-auto" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              Our comprehensive approach guides you through each phase of the design process,
              from initial brainstorming to final installation.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 process-steps">
            {[
              { num: '01', title: 'Book Your Order',   desc: 'Fill up our contact form and we will get right back to you.' },
              { num: '02', title: 'Design Starts',      desc: 'We learn your preferences and provide a detailed cost estimation.' },
              { num: '03', title: 'Execution Phase',    desc: 'Your dream interiors begin to take shape under our expert team.' },
              { num: '04', title: 'Installation Phase', desc: 'We handle delivery and installation - everything is turnkey.' }
            ].map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="step-num-badge">{step.num}</div>
                <h3 className="h4 mb-2" style={{fontSize: '1.15rem'}}>{step.title}</h3>
                <p className="text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="h2" style={{marginBottom: '0'}}>What Our Customers Say</h2>
          </div>

          <div className="projects-marquee-wrap">
            <div className="projects-marquee-track testimonial-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="testi-avatar">
                    <img src={t.img} alt={t.name} />
                  </div>
                  <h3 className="testi-name">{t.name}</h3>
                  <p className="testi-location">{t.location}</p>
                  <div className="testi-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="star-icon" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="testi-text text-muted">“{t.text}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageContainer>
  );
};

export default Home;
