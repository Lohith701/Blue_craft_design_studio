import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './LeadPopup.css';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup initially after 15 seconds, and then every 15 seconds if closed
    const timer = setInterval(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    // Include the +91 prefix in the submitted phone number
    formData.set('Phone', '+91 ' + formData.get('Phone'));

    try {
      await fetch("https://formsubmit.co/ajax/lohithobulapuram@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      setIsOpen(false);
      alert("Thank you! We will get back to you shortly.");
      e.target.reset(); // Reset form for next time
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lead-popup-overlay">
      <div className="lead-popup-container">
        <button className="lead-popup-close" onClick={() => setIsOpen(false)} aria-label="Close popup">
          <X size={20} />
        </button>
        <h2 className="lead-popup-heading">BOOK A FREE CALL</h2>
        
        <form className="lead-popup-form" onSubmit={handleSubmit}>
          {/* Prevent captcha from formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Lead Booking Request!" />
          
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="Name" 
              pattern="[A-Za-z\s]+" 
              title="Only alphabets and spaces are allowed"
              required 
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Phone No:</label>
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+91</span>
              <input 
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
            <label>Requirement:</label>
            <select name="Requirement" required defaultValue="">
              <option value="" disabled>Select an option</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="Villa">Villa</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location:</label>
            <input 
              type="text" 
              name="Location" 
              required 
              placeholder="Enter your location"
            />
          </div>

          <button type="submit" className="btn btn-primary lead-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
