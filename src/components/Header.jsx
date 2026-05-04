import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect y="4" width="22" height="2" rx="1" fill="currentColor" />
    <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
    <rect y="16" width="16" height="2" rx="1" fill="currentColor" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Also force scrolled style on blog post pages
  const isSinglePost = location.pathname.match(/^\/blog\/.+/);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount so initial state is correct
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Trending', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerClass = `header ${isScrolled || isSinglePost ? 'scrolled' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/images/FINAL_LOGO.png" alt="Blue Craft Logo" className="logo-img" />
            <div className="logo-text">
              <h2>Blue Craft</h2>
              <span>Design Studio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-actions">
            <a href="tel:+919886933999" className="btn btn-primary desktop-btn">
              +91 98869 33999
            </a>
            {/* Hamburger — always visible on mobile */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen Mobile Menu ── */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>



        {/* Decorative brand mark */}
        <div className="mobile-menu-brand">
          <img src="/images/FINAL_LOGO.png" alt="Blue Craft Logo" className="mobile-menu-logo" />
          <span>Blue Craft Design Studio</span>
        </div>

        {/* Nav links */}
        <nav className="mobile-menu-nav">
          <ul>
            {navLinks.map((link, idx) => (
              <li
                key={link.name}
                className="mobile-menu-item"
                style={{ '--i': idx }}
              >
                <Link
                  to={link.path}
                  className={`mobile-menu-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-link-num">0{idx + 1}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div className="mobile-menu-footer">
          <a href="tel:+919886933999" className="btn btn-primary mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>
            +91 98869 33999
          </a>
          <p className="mobile-menu-tagline">Premium Interior Design Studio</p>
        </div>

        {/* Decorative bg circles */}
        <div className="mobile-menu-deco" />
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;
