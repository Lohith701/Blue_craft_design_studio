import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <Link to="/" className="footer-logo">
              <h2>Blue Craft</h2>
              <span>Design Studio</span>
            </Link>
            <p className="footer-desc">
              Bespoke designs that elevate your home and lifestyle. We provide timeless, functional interiors crafted for the way you live.
            </p>
            <div className="social-links text-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Fb</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Ig</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">In</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Information</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Our Company</Link></li>
              <li><Link to="/services">View Our Services</Link></li>
              <li><Link to="/projects">Our Latest Projects</Link></li>
              <li><Link to="/blog">Read Our Blog</Link></li>
              <li><Link to="/contact">Careers at Company</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Sarjapur Road, Bangalore, India</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919886933999">+91 98869 33999</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:bluecraftdesignstudio@gmail.com">bluecraftdesignstudio@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h3>Newsletter</h3>
            <p>Sign up for our newsletter to get latest updates and offers.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
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
