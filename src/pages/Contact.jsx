import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch('https://formsubmit.co/ajax/bluecraftdesignstudio@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      alert('Thank you! We will get back to you within 24 hours.');
      e.target.reset();
    } catch {
      alert('Something went wrong. Please call us directly at +91 98869 33999.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer
      title="Contact Us"
      description="Get in touch with Blue Craft Design Studio. Book your free consultation and start your journey to a beautifully designed home."
    >
      <HeroBanner
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Let's build something amazing together."
        bgImage="/images/hero-banner/contact-banner.jpeg"
      />

      <section className="section bg-secondary">
        <div className="container">
          <div
            className="grid grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg relative -mt-32 z-10 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="h2 mb-4">Get in Touch</h2>
              <p className="text-muted mb-10" style={{ lineHeight: '1.8' }}>
                Fill out the form and our team will get back to you within 24 hours.
                Alternatively, you can reach us directly via phone or email.
              </p>

              <ul className="contact-details-list">
                <li>
                  <div className="contact-icon-wrapper bg-secondary text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-muted text-sm">
                      club circle 754/1, 19th main, 22nd Cross Rd, Sector 2,
                      HSR Layout, Bengaluru, Karnataka 560102
                    </p>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper bg-secondary text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <a href="tel:+919886933999" className="text-muted text-sm">
                      +91 98869 33999
                    </a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon-wrapper bg-secondary text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <a
                      href="mailto:bluecraftdesignstudio@gmail.com"
                      className="text-muted text-sm"
                    >
                      bluecraftdesignstudio@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h3 className="h3 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Formsubmit configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <div className="form-group">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    required
                    aria-label="Your Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      required
                      aria-label="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="Your Phone"
                      aria-label="Your Phone"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    rows="5"
                    placeholder="Tell us about your project..."
                    required
                    aria-label="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Submit Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="Blue Craft Design Studio Location"
          src="https://maps.google.com/maps?q=Blue+Craft+Design+Studio,+HSR+Layout,+Bengaluru&z=15&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageContainer>
  );
};

export default Contact;
