import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Calendar, User, ArrowRight } from 'lucide-react';
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
        <img src={blog.image} alt={blog.title} />
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
          Read More <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

/* ─── Blog Page ──────────────────────────────────────────── */
const Blog = () => {
  const topRow = BLOGS.slice(0, 3);
  const bottomRow = BLOGS.slice(3, 5);

  return (
    <PageContainer
      title="Trending | Blue Craft Design"
      description="Read the latest news, trends, and tips on interior design and architecture from Blue Craft Design Studio."
    >
      <HeroBanner 
        eyebrow="Market Insights"
        title="Trending"
        subtitle="Stay ahead with the latest interior design trends and innovations."
        bgImage="/images/hero-banner/trending-banner.jpeg"
      />

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">

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

        </div>
      </section>
    </PageContainer>
  );
};

export default Blog;
