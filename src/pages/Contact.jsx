import React, { useRef } from 'react';
import './Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const contactRef = useRef(null);
  const isVisible = useScrollAnimation(contactRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        
        <div ref={contactRef} className={`contact-wrapper ${isVisible ? 'animate' : ''}`}>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68688874665!2d70.71790414060671!3d22.27348876325054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710612191080!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" required />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 