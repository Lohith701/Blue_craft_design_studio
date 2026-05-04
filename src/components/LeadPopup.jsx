import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './LeadPopup.css';

const SESSION_KEY = 'bcd_lead_shown';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Only show once per browser session; never again after submission
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.set('Phone', '+91 ' + formData.get('Phone'));

    try {
      await fetch('https://formsubmit.co/ajax/bluecraftdesignstudio@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      handleClose();
      alert('Thank you! We will get back to you shortly.');
      e.target.reset();
    } catch {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lead-popup-overlay" role="dialog" aria-modal="true" aria-label="Book a free call">
      <div className="lead-popup-container">
        <button
          className="lead-popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        <h2 className="lead-popup-heading">BOOK A FREE CALL</h2>

        <form className="lead-popup-form" onSubmit={handleSubmit}>
          {/* Formsubmit configuration */}
          <input type="hidden" name="_captcha"  value="false" />
          <input type="hidden" name="_subject"  value="New Lead Booking Request!" />

          <div className="form-group">
            <label htmlFor="popup-name">Name:</label>
            <input
              id="popup-name"
              type="text"
              name="Name"
              pattern="[A-Za-z\s]+"
              title="Only alphabets and spaces are allowed"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="popup-phone">Phone No:</label>
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+91</span>
              <input
                id="popup-phone"
                type="tel"
                name="Phone"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit number"
                required
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="popup-requirement">Requirement:</label>
            <select id="popup-requirement" name="Requirement" required defaultValue="">
              <option value="" disabled>Select an option</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Villa">Villa</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="popup-location">Location:</label>
            <input
              id="popup-location"
              type="text"
              name="Location"
              required
              placeholder="Enter your location"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary lead-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
