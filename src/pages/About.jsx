import React, { useState, useEffect, useRef } from 'react';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';
import './About.css';

const Counter = ({ end, duration, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(end);
              setFinished(true);
            }
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={`inline-block ${finished ? 'count-finished' : ''}`}>
      {prefix}{count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <PageContainer
      title="Best Interior Design Firm Bangalore | Blue Craft"
      description="Blue Craft Design Studio — Bangalore's best interior design firm. 15+ years crafting luxury, modern & minimalist interiors across HSR Layout, Whitefield & beyond."
    >
      <HeroBanner
        eyebrow="Bangalore's Interior Design Experts"
        title="About Blue Craft"
        subtitle="15 years of crafting luxury, modern, and minimalist interiors that Bangalore homeowners love."
        bgImage="/images/hero-banner/about-banner.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="about-content">
              <h2 className="h2 mb-6">Bengaluru&apos;s Interior Design Studio — Built on Trust, Driven by Craft</h2>
              <p className="mb-4 text-muted">
                Blue Craft Design Studio was born from a simple belief: every home deserves to be designed
                with intention. Founded over 15 years ago in Bangalore, we have grown into one of the
                city&apos;s most sought-after interior design firms — not by following trends, but by
                understanding people. From the quiet elegance of minimalist interior design to the rich
                layering of luxury interiors, we speak every design language fluently.
              </p>
              <p className="mb-6 text-muted">
                Today, our studio is home to a team of passionate architects, designers, and craftsmen
                who collectively bring decades of experience to every project. Whether it&apos;s a compact
                2BHK in HSR Layout or a sprawling villa in Whitefield, we approach each space with the
                same rigour, creativity, and care. That commitment is why over 500 Bangalore families
                have trusted us to design the home they always imagined.
              </p>

              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={15} suffix="+" duration={1500} /></span>
                  <span className="stat-text">Years in Bangalore</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={500} suffix="+" duration={2000} /></span>
                  <span className="stat-text">Homes Transformed</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num text-accent"><Counter end={100} suffix="%" duration={1800} /></span>
                  <span className="stat-text">Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="about-images grid grid-cols-2 gap-4">
              <img src="/images/about1.jpeg" alt="Blue Craft office and studio space" className="rounded-lg object-cover h-full" loading="lazy" width="500" height="600" />
              <img src="/images/about2.jpeg" alt="Blue Craft design process in action" className="rounded-lg object-cover h-full mt-8" loading="lazy" width="500" height="600" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container text-center">
          <h2 className="h2 mb-12">The Values That Define Every Project We Take On</h2>
          <div className="core-values-grid">
            {[
              {
                icon: Target,
                title: 'Uncompromising Precision',
                desc: 'From millimetre-accurate cabinetry to perfectly matched colour palettes — every detail is intentional. Great interiors are built in the details.',
              },
              {
                icon: Lightbulb,
                title: 'Design That Evolves',
                desc: 'We stay ahead of modern interior design trends without chasing them blindly. Every innovation we adopt must serve your space and lifestyle first.',
              },
              {
                icon: Users,
                title: 'Your Vision, Centre Stage',
                desc: 'We are interior designers in Bangalore who listen first. Your life, your preferences, and your budget shape every decision we make together.',
              },
              {
                icon: Shield,
                title: 'Radical Transparency',
                desc: 'Itemised quotes. No hidden costs. No inflated markups. You know exactly what you\'re paying for at every stage — because trust is non-negotiable.',
              },
            ].map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon-wrap">
                  <val.icon size={28} />
                </div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageContainer>
  );
};

export default About;
