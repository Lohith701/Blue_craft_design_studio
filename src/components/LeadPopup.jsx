import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './LeadPopup.css';

const INTERVAL_MS = 20000; // 20 seconds

const LeadPopup = () => {
  const [isOpen, setIsOpen]           = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef(null);

  const scheduleNext = () => {
    // Clear any existing timer before scheduling a new one
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsOpen(true), INTERVAL_MS);
  };

  useEffect(() => {
    // Show popup 20 seconds after mount
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    setIsOpen(false);
    // Re-schedule for another 20 seconds from now
    scheduleNext();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.set('Phone', '+91 ' + formData.get('Phone'));

    try {
      const response = await fetch('https://formsubmit.co/ajax/Sales@bluecraftdesignstudio.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsOpen(false);
      alert('Thank you! We will get back to you shortly.');
      e.target.reset();

      // Reappear again after 20 seconds even after successful submission
      scheduleNext();
    } catch {
      alert('There was an error submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="lead-popup-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free consultation call"
    >
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
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Lead Booking Request!" />
          <input type="hidden" name="_cc"      value="Projects@bluecraftdesignstudio.com" />

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
