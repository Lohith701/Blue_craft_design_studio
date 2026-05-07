import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { BLOGS } from '../data/blogData';
import './Blog.css';

/* ─── Blog Card ──────────────────────────────────────────── */
const BlogCard = ({ blog, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <article
      ref={ref}
      className={`blog-card ${visible ? 'card-visible' : ''}`}
    >
      {/* Image */}
      <Link to={`/blog/${blog.id}`} className="blog-card-img-wrap" tabIndex={-1}>
        <span className="blog-card-category">{blog.category}</span>
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          width="420"
          height="280"
        />
      </Link>

      {/* Body */}
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span><Calendar size={13} /> {blog.date}</span>
          <span><User size={13} /> {blog.author}</span>
        </div>
        <h3 className="blog-card-title">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="blog-read-more">
          Read Full Article <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

/* ─── Blog Page ──────────────────────────────────────────── */
const Blog = () => {
  const topRow    = BLOGS.slice(0, 3);
  const bottomRow = BLOGS.slice(3, 5);

  return (
    <PageContainer
      title="Interior Design Ideas & Trends Blog | Blue Craft Bangalore"
      description="Explore modular interior design ideas, home renovation tips, biophilic design trends, and modern interior inspiration from Bangalore's leading interior design studio."
    >
      <HeroBanner
        eyebrow="Interior Design Ideas & Inspiration"
        title="Design Trends"
        subtitle="Modular interior design ideas, material guides, and home renovation insights from Bangalore's experts."
        bgImage="/images/hero-banner/trending-banner.webp"
      />

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">

          {/* ── Section header ── */}
          <div className="text-center" style={{ maxWidth: '740px', margin: '0 auto 3.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Our Blog
            </span>
            <h2 className="h2" style={{ marginBottom: '1rem' }}>
              Modular Interior Design Ideas, Guides &amp; Inspiration
            </h2>
            <p className="text-muted" style={{ lineHeight: '1.85' }}>
              Whether you are planning a full home renovation in Bangalore, exploring modular
              interior design ideas for your kitchen, or curious about biophilic design trends
              in India — our expert articles break down complex design decisions into clear,
              actionable guidance you can use immediately.
            </p>
          </div>

          {/* Top row — 3 cards */}
          <div className="blog-grid">
            {topRow.map((blog, idx) => (
              <BlogCard key={blog.id} blog={blog} delay={idx * 120} />
            ))}
          </div>

          {/* Bottom row — 2 cards centred */}
          <div className="blog-grid-bottom" style={{ marginTop: '2rem' }}>
            {bottomRow.map((blog, idx) => (
              <BlogCard key={blog.id} blog={blog} delay={(idx + 3) * 120} />
            ))}
          </div>

          {/* ── Services CTA strip ── */}
          <div
            style={{
              marginTop: '5rem',
              background: 'var(--primary)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <BookOpen size={20} color="var(--gold, #c9a84c)" />
                <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold, #c9a84c)' }}>
                  Ready to Go Further?
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0, lineHeight: 1.3 }}>
                Turn These Ideas Into Your Dream Home
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.6rem', fontSize: '0.95rem' }}>
                Our modern interior design team in Bangalore can help you implement every idea
                you read here — from modular interiors and custom furniture to full home renovation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/services"
                className="btn"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ background: '#fff', color: 'var(--primary)', border: 'none' }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>
    </PageContainer>
  );
};

export default Blog;
