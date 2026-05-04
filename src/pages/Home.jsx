import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import { ArrowRight, CheckCircle2, LayoutDashboard, Eye, Tag, Layers, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import './Home.css';

/* ── Typewriter Component ── */
const TypewriterText = ({ text, isActive }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text, isActive]);

  return (
    <span>
      {displayedText}
      {isActive && <span className="typewriter-cursor" />}
    </span>
  );
};

/* ── Scroll Typewriter Component ── */
const ScrollTypewriterText = ({ text }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      <TypewriterText text={text} isActive={isActive} />
    </span>
  );
};

/* ── Hero Slides ── */
const HERO_SLIDES = [
  {
    image: '/images/h1.png',
    title: 'Designing Spaces.\nElevating Lifestyles.',
    desc: 'Thoughtful design. Timeless spaces.\nCrafted for the way you live.',
  },
  {
    image: '/images/img1.jpeg',
    title: 'We bring your vision into reality',
    desc: '',
  },
  {
    image: '/images/img2.png',
    title: 'We create spaces where families actually want to spend time together',
    desc: '',
  },
];

/* ── Testimonial data ── */
const TESTIMONIALS = [
  {
    name: 'Shambhuprasad - Geethika',
    location: 'Bangalore',
    img: '/images/Testimonials/Shambhuprasad - Geethika.jpeg',
    rating: 5,
    text: 'Wonderful decision, amazing work delivered.',
  },
  {
    name: 'Mohan - Jyothi',
    location: 'Bangalore',
    img: '/images/Testimonials/Mohan-Jyothi.jpeg',
    rating: 5,
    text: 'High-quality work and timely responses.',
  },
  {
    name: 'Venki - Devi',
    location: 'Bangalore',
    img: '/images/Testimonials/venki-Devi.jpeg',
    rating: 5,
    text: 'Great design options and smooth experience.',
  },
  {
    name: 'Dhamodhar - Navaneetha',
    location: 'Bangalore',
    img: '/images/Testimonials/Dhamodhar-Navaneetha.jpeg',
    rating: 5,
    text: 'Wonderful decision, amazing work delivered.',
  },
  {
    name: 'Mahesh - Bhargavi',
    location: 'Bangalore',
    img: '/images/Testimonials/Mahesh - Bhargavi.jpeg',
    rating: 5,
    text: 'Very professional team. The best interior designers in Bangalore!',
  },
  {
    name: 'Karthik - Yesswini',
    location: 'Bangalore',
    img: '/images/Testimonials/Karthik - Yesswini.jpeg',
    rating: 5,
    text: 'They utilized our space so efficiently without making it feel cluttered.',
  },
];

/* ── helper: animate a number ── */
function animateCount(from, to, duration, setter) {
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setter(Math.floor(eased * (to - from) + from));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const CIRC = 2 * Math.PI * 45;

const Home = () => {
  const aboutRef   = useRef(null);
  const processRef = useRef(null);
  const [inView, setInView]             = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [yearsCount, setYearsCount]     = useState(0);
  const [satisfCount, setSatisfCount]   = useState(0);
  const [yearsReady, setYearsReady]     = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const openModal  = useCallback((project) => setActiveProject(project), []);
  const closeModal = useCallback(() => setActiveProject(null), []);

  /* ── Hero auto-advance ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ── About section observer ── */
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
            if (v === 15) setYearsReady(true);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Process section observer ── */
  useEffect(() => {
    const el = processRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const strokeOffset = CIRC - (satisfCount / 100) * CIRC;

  return (
    <>
      <PageContainer
        title="Home"
        description="Blue Craft Design Studio offers bespoke designs that elevate your home and lifestyle. Timeless, functional interiors crafted for the way you live."
      >
        {/* ── Hero ── */}
        <section className="hero">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            >
              {/*
                Slide 0: fetchpriority="high" (LCP image — load immediately)
                Slide 1+: loading="lazy" (only loaded when needed)
              */}
              <img
                src={slide.image}
                alt={slide.title.replace(/\n/g, ' ')}
                className="hero-slide-img"
                fetchpriority={idx === 0 ? 'high' : 'low'}
                loading={idx === 0 ? 'eager' : 'lazy'}
                width="1920"
                height="1080"
                decoding={idx === 0 ? 'sync' : 'async'}
              />
              <div className="hero-overlay" />
              <div className="container hero-content">
                <h1 className="animate-fade-up" key={`h1-${idx}-${currentSlide}`}>
                  <TypewriterText text={slide.title} isActive={idx === currentSlide} />
                </h1>
                {slide.desc && (
                  <p
                    className="animate-fade-up"
                    style={{ animationDelay: '0.2s' }}
                    key={`p-${idx}-${currentSlide}`}
                  >
                    {slide.desc}
                  </p>
                )}
                <div
                  className="hero-actions animate-fade-up"
                  style={{ animationDelay: '0.4s' }}
                  key={`acts-${idx}-${currentSlide}`}
                >
                  <Link
                    to="/contact"
                    className="btn btn-outline"
                    style={{
                      color: 'white',
                      borderColor: 'white',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    Book your consultation <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <button
            className="hero-nav-btn prev"
            onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="hero-nav-btn next"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          <div className="hero-dots">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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
                  it&apos;s transforming a single room or an entire home.
                </p>
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

              {/* Right – collage */}
              <div className="about-visuals">
                <div className={`about-img-primary ${inView ? 'shine-active' : ''}`}>
                  <img
                    src="/images/home_about.jpeg"
                    alt="Premium Kitchen Interior by Blue Craft"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className={`about-img-secondary ${inView ? 'shine-active' : ''}`}>
                  <img
                    src="/images/home_about_secondary.jpeg"
                    alt="Modern Interior Design by Blue Craft"
                    loading="lazy"
                    width="500"
                    height="350"
                  />
                </div>

                {/* 15+ badge */}
                <div className={`experience-badge ${yearsReady ? 'badge-bounce' : ''}`}>
                  <span className="years">{yearsCount}+</span>
                  <span className="badge-label">Years Of<br />Experience</span>
                </div>

                {/* 95% ring */}
                <div className="stat-right-panel">
                  <span className="positive-feedback-text">Positive Feedback</span>
                  <div className="stat-ring-badge">
                    <svg viewBox="0 0 100 100" className="stat-ring-svg">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(25,35,36,0.15)" strokeWidth="7" />
                      <circle
                        cx="50" cy="50" r="42" fill="none"
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
            <span className="advantages-eyebrow">Why Choose Blue Craft In Bangalore</span>
            <h2 className="h2 advantages-heading">Our Key Advantages</h2>

            <div className="advantages-layout">
              <div className="advantages-left">
                <p className="advantages-subtitle text-muted">
                  From concept to completion, discover how we bring your vision to life
                  with innovation, collaboration, and expert craftsmanship.
                </p>

                <div className="advantages-list">
                  {[
                    {
                      icon: LayoutDashboard, title: 'Innovative Design Options',
                      desc: 'Blue Craft offers unique and innovative interior design solutions that are ready to go as well as completely customizable.',
                    },
                    {
                      icon: Eye, title: 'Material Transparency',
                      desc: "We provide full transparency throughout our process so you know exactly what you're paying for.",
                    },
                    {
                      icon: Tag, title: 'Reasonable Price',
                      desc: 'If you need the best home interior price in Bangalore, Blue Craft offers competitive rates without compromise.',
                    },
                    {
                      icon: Layers, title: 'End-To-End Service',
                      desc: 'From initial design through final installation, we handle every step of your projects across Bangalore and neighbouring states.',
                    },
                    {
                      icon: Award, title: 'Assured Quality',
                      desc: "Whether it's a 2BHK or a 4BHK, we deliver top-notch workmanship guaranteed to impress.",
                    },
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
                  <img
                    src="/images/adv_img1.jpeg"
                    alt="Elegant Foyer Design by Blue Craft"
                    loading="lazy"
                    width="400"
                    height="600"
                  />
                </div>
                <div className="adv-img-card">
                  <img
                    src="/images/adv_img2.jpeg"
                    alt="Modern TV Unit Design"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="adv-img-card">
                  <img
                    src="/images/adv_img3.jpeg"
                    alt="Designer Living Room Interior"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects Showcase ── */}
        <section className="section projects-showcase">
          <div className="container">
            <div className="projects-header">
              <div>
                <span className="projects-eyebrow">Projects</span>
                <h2 className="h2 projects-heading">Featured Projects</h2>
              </div>
              <Link to="/projects" className="btn btn-outline gap-2">
                View All Projects <ArrowRight size={18} />
              </Link>
            </div>

            {/* Infinite marquee slider */}
            <div className="projects-marquee-wrap">
              <div className="projects-marquee-track">
                {[...PROJECTS_DATA, ...PROJECTS_DATA].map((p, idx) => (
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
                      <img
                        src={p.images[0]}
                        alt={`${p.title} interior design by Blue Craft`}
                        loading="lazy"
                        width="280"
                        height="373"
                      />
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
            <div className="grid grid-cols-4 gap-6 process-steps" ref={processRef}>
              {[
                { num: '01', title: 'Book Your Order', desc: 'Fill up our contact form and we will get right back to you.' },
                { num: '02', title: 'Design Starts', desc: 'We learn your preferences and provide a detailed cost estimation.' },
                { num: '03', title: 'Execution Phase', desc: 'Your dream interiors begin to take shape under our expert team.' },
                { num: '04', title: 'Installation Phase', desc: 'We handle delivery and installation - everything is turnkey.' },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`process-step-wrapper ${processInView ? 'animate-pop-up' : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="process-step-card">
                    <div className="step-num-badge">{step.num}</div>
                    <h3 className="h4 mb-2" style={{ fontSize: '1.15rem' }}>{step.title}</h3>
                    <p className="text-muted text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="text-center text-accent font-semibold"
              style={{ fontSize: '1.875rem', letterSpacing: '2px', marginTop: '5rem' }}
            >
              <ScrollTypewriterText text="---NOW YOU'RE READY TO MOVE IN---" />
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section testimonials-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="h2" style={{ marginBottom: '0' }}>What Our Customers Say</h2>
            </div>

            <div className="projects-marquee-wrap">
              <div className="projects-marquee-track testimonial-track">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                  <div key={idx} className="testimonial-card">
                    <div className="testi-avatar">
                      <img
                        src={t.img}
                        alt={`${t.name} — Blue Craft customer`}
                        loading="lazy"
                        width="95"
                        height="95"
                      />
                    </div>
                    <h3 className="testi-name">{t.name}</h3>
                    <p className="testi-location">{t.location}</p>
                    <div className="testi-stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="star-icon" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="testi-text text-muted">&ldquo;{t.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </PageContainer>
    </>
  );
};

export default Home;
