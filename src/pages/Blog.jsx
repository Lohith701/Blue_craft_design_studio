import React from 'react';
import PageContainer from '../components/PageContainer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Can Custom Furniture Elevate Your Home’s Aesthetics?',
      excerpt: 'Discover how bespoke pieces can transform an ordinary room into a statement of your personal style and taste.',
      date: 'Oct 15, 2025',
      author: 'Admin',
      image: '/images/hero.png'
    },
    {
      id: 2,
      title: 'Flexible Spaces: The Future of Multipurpose Interiors',
      excerpt: 'Learn how to design adaptable spaces that seamlessly transition from home offices to guest bedrooms.',
      date: 'Oct 10, 2025',
      author: 'Admin',
      image: '/images/project1.png'
    },
    {
      id: 3,
      title: 'The Psychology of Color in Interior Design',
      excerpt: 'How different hues and shades can affect your mood, productivity, and overall well-being at home.',
      date: 'Sep 28, 2025',
      author: 'Admin',
      image: '/images/project2.png'
    }
  ];

  return (
    <PageContainer 
      title="Trending" 
      description="Read the latest news, trends, and tips on interior design and architecture from Blue Craft Design Studio."
    >
      <div className="page-header bg-primary">
        <div className="container">
          <h1 className="h1 text-white animate-fade-up">Trending</h1>
          <p className="text-gray-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Your journey to inspired interiors begins here.
          </p>
        </div>
      </div>

      <section className="section min-h-screen">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card bg-white rounded-lg shadow-sm overflow-hidden animate-fade-up">
                <div className="blog-img-wrapper overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="blog-content p-6 border border-t-0 border-gray-100 rounded-b-lg">
                  <div className="blog-meta flex items-center gap-4 text-sm text-accent mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                  </div>
                  <h3 className="h4 mb-3 blog-title transition-colors hover:text-accent">
                    <Link to="/blog">{blog.title}</Link>
                  </h3>
                  <p className="text-muted text-sm mb-4">{blog.excerpt}</p>
                  <Link to="/blog" className="read-more text-primary font-semibold flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Blog;
