import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/Sales@bluecraftdesignstudio.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      alert('Thank you for subscribing! We will be in touch.');
      e.target.reset();
    } catch {
      alert('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-col about-col">
            <Link to="/" className="footer-logo">
              <img
                src="/images/FINAL_LOGO.webp"
                alt="Blue Craft Design Studio - Interior Designers in Bengaluru"
                className="footer-logo-img"
                loading="lazy"
                width="50"
                height="50"
              />
              <div className="logo-text">
                <h2>Blue Craft</h2>
                <span>Design Studio</span>
              </div>
            </Link>
            <p className="footer-desc">
              Bespoke designs that elevate your home and lifestyle. We provide timeless,
              functional interiors crafted for the way you live.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/bluecraftdesignstudio/" target="_blank" rel="noopener noreferrer" aria-label="Blue Craft on Facebook"><FacebookIcon /></a>
              <a href="https://x.com/BlueCraft9999"                      target="_blank" rel="noopener noreferrer" aria-label="Blue Craft on Twitter"><TwitterIcon /></a>
              <a href="https://www.instagram.com/blue_craft_design_studio/" target="_blank" rel="noopener noreferrer" aria-label="Blue Craft on Instagram"><InstagramIcon /></a>
              <a href="https://www.linkedin.com/company/blue-craft-design-studio/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="Blue Craft on LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Information column */}
          <div className="footer-col">
            <h3>Information</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Our Company</Link></li>
              <li><Link to="/services">View Our Services</Link></li>
              <li><Link to="/projects">Our Latest Projects</Link></li>
              <li><Link to="/blog">Read Our Blog</Link></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" aria-hidden="true" />
                <span>club circle 754/1, 19th main, 22nd Cross Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" aria-hidden="true" />
                <a href="tel:+919886933999">+91 98869 33999</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <a href="mailto:bluecraftdesignstudio@gmail.com">bluecraftdesignstudio@gmail.com</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <a href="mailto:projects@bluecraftdesignstudio.com">projects@bluecraftdesignstudio.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="footer-col newsletter-col">
            <h3>Newsletter</h3>
            <p>Sign up to get the latest design trends and offers.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Newsletter Subscription" />
              <input type="email" name="Email" placeholder="Your Email Address" required aria-label="Email address for newsletter" />
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blue Craft Design Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
