import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ProjectModal from '../components/ProjectModal';
import { ArrowRight, CheckCircle2, LayoutDashboard, Eye, Tag, Layers, Award, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, isActive]);

  return (
    <span>
      {displayedText}
      {isActive && <span className="typewriter-cursor"></span>}
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
    image: '/images/hero.jpeg',
    title: 'BlueCraft designs that elevate your home and lifestyle.',
    desc: 'Timeless, functional interiors crafted for the way you live.',
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
  }
];

/* ── Project data with multiple images per project ── */
const PROJECTS = [
  {
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
    title: 'False ceiling',
    cat: 'Interior / Ceiling',
    images: [
      '/images/falseCeiling/fc (1).jpeg',
      '/images/falseCeiling/fc (2).jpeg',
      '/images/falseCeiling/fc (3).jpeg',
    ],
  },
  {
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
    title: 'Wardrobe',
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

/* ── Testimonial data ── */
const TESTIMONIALS = [
  {
    name: 'Shambhuprasad - Geethika',
    location: 'Bangalore',
    img: '/images/home_about.jpeg',
    rating: 5,
    text: "Wonderful decision, amazing work delivered.",
  },
  {
    name: 'Mohan - Jyothi',
    location: 'Bangalore',
    img: '/images/Testimonials/Mohan-Jyothi.jpeg',
    rating: 5,
    text: "High-quality work and timely responses.",
  },
  {
    name: 'Venki - Devi',
    location: 'Bangalore',
    img: '/images/Testimonials/venki-Devi.jpeg',
    rating: 5,
    text: "Great design options and smooth experience.",
  },
  {
    name: 'Dhamodhar - Navaneetha',
    location: 'Bangalore',
    img: '/images/Testimonials/Dhamodhar-Navaneetha.jpeg',
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
  const processRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [processInView, setProcessInView] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [satisfCount, setSatisfCount] = useState(0);
  const [yearsReady, setYearsReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ── Modal state ── */
  const [activeProject, setActiveProject] = useState(null); // null = closed
  const openModal = useCallback((project) => setActiveProject(project), []);
  const closeModal = useCallback(() => setActiveProject(null), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  // Intersection observer for Process Section
  useEffect(() => {
    const el = processRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessInView(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // stroke offset for SVG ring
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
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="animate-fade-up" key={`h1-${idx}-${currentSlide}`}>
                <TypewriterText text={slide.title} isActive={idx === currentSlide} />
              </h1>
              {slide.desc && (
                <p className="animate-fade-up" style={{ animationDelay: '0.2s' }} key={`p-${idx}-${currentSlide}`}>
                  {slide.desc}
                </p>
              )}
              <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }} key={`acts-${idx}-${currentSlide}`}>
                <Link to="/contact" className="btn btn-primary">Book Your Consultation</Link>
                <Link to="/projects" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Our Work</Link>
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
                <img src="/images/home_about.jpeg" alt="Premium Kitchen Interior" />
              </div>

              {/* Smaller image — bottom-right */}
              <div className={`about-img-secondary ${inView ? 'shine-active' : ''}`}>
                <img src="/images/home_about_secondary.jpeg" alt="Modern Exterior Design" />
              </div>

              {/* 15+ circle badge — overlapping the two images */}
              <div className={`experience-badge ${yearsReady ? 'badge-bounce' : ''}`}>
                <span className="years">{yearsCount}+</span>
                <span className="badge-label">Years Of<br />Experience</span>
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
                  {
                    icon: LayoutDashboard, title: 'Innovative Design Options',
                    desc: 'Blue Craft offers unique and innovative interior design solutions that are ready to go as well as completely customizable.'
                  },
                  {
                    icon: Eye, title: 'Material Transparency',
                    desc: "We provide full transparency throughout our process so you know exactly what you're paying for."
                  },
                  {
                    icon: Tag, title: 'Reasonable Price',
                    desc: 'If you need the best home interior price in Bangalore, Blue Craft offers competitive rates without compromise.'
                  },
                  {
                    icon: Layers, title: 'End-To-End Service',
                    desc: 'From initial design through final installation, we handle every step of your projects across Bangalore and nighbouring states'
                  },
                  {
                    icon: Award, title: 'Assured Quality',
                    desc: "Whether it's a 2BHK or a 4BHK, we deliver top-notch workmanship guaranteed to impress."
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
                <img src="/images/adv_img1.jpeg" alt="Elegant Foyer Design" />
              </div>
              <div className="adv-img-card">
                <img src="/images/adv_img2.jpeg" alt="Modern TV Unit" />
              </div>
              <div className="adv-img-card">
                <img src="/images/adv_img3.jpeg" alt="Designer Living Room" />
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
          <div className="grid grid-cols-4 gap-6 process-steps" ref={processRef}>
            {[
              { num: '01', title: 'Book Your Order', desc: 'Fill up our contact form and we will get right back to you.' },
              { num: '02', title: 'Design Starts', desc: 'We learn your preferences and provide a detailed cost estimation.' },
              { num: '03', title: 'Execution Phase', desc: 'Your dream interiors begin to take shape under our expert team.' },
              { num: '04', title: 'Installation Phase', desc: 'We handle delivery and installation - everything is turnkey.' }
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
          <div className="text-center text-accent font-semibold" style={{ fontSize: '1.875rem', letterSpacing: '2px', marginTop: '5rem' }}>
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

      {/* ── Floating Action Buttons ── */}
      <div className="fab-container">
        <a 
          href="https://wa.me/9886933999?text=Hello%2C%20I%20want%20to%20book%20a%20free%20consultation" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fab-btn fab-whatsapp"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="fab-icon">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <a 
          href="tel:9886933999" 
          className="fab-btn fab-call"
          aria-label="Call Us"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="fab-icon">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 1.01-.63 1.01-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Home;
