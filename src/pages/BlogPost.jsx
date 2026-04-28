import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { BLOGS } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find((b) => b.id === Number(id));

  // Scroll to top when post opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!blog) {
    return (
      <PageContainer title="Post Not Found">
        <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
          <h2>Blog post not found.</h2>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            ← Back to Trending
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title={`${blog.title} | Blue Craft Design`}
      description={blog.excerpt}
    >
      {/* ── Article ── */}
      <article className="bp-article">
        <div className="bp-article-inner">

          {/* Back link */}
          <Link to="/blog" className="bp-back-link">
            <ArrowLeft size={16} /> Back to Trending
          </Link>

          {/* Category chip */}
          <span className="bp-category">{blog.category}</span>

          {/* Meta */}
          <div className="bp-meta">
            <span><Calendar size={14} /> {blog.date}</span>
            <span><User size={14} /> {blog.author}</span>
          </div>

          {/* Title */}
          <h1 className="bp-title">{blog.title}</h1>

          {/* Divider */}
          <div className="bp-divider" />

          {/* Post Image */}
          <div className="bp-inline-image-wrap">
            <img src={blog.image} alt={blog.title} className="bp-inline-image" />
          </div>

          {/* Body */}
          <div className="bp-body">
            {blog.body.map((block, i) => {
              if (block.type === 'p')        return <p key={i}>{block.text}</p>;
              if (block.type === 'subtitle') return <p key={i} className="bp-subtitle">{block.text}</p>;
              if (block.type === 'h3')       return <h3 key={i}>{block.text}</h3>;
              if (block.type === 'ul')       return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
              return null;
            })}
          </div>

          {/* Footer nav */}
          <div className="bp-footer-nav">
            <button onClick={() => navigate(-1)} className="btn btn-outline bp-nav-btn">
              <ArrowLeft size={16} /> Go Back
            </button>
            <Link to="/contact" className="btn btn-primary bp-nav-btn">
              Book a Consultation
            </Link>
          </div>

        </div>
      </article>
    </PageContainer>
  );
};

export default BlogPost;
