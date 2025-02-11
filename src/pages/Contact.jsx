import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  // Add more country codes as needed
];

const Contact = () => {
  const contactRef = useRef(null);
  const isVisible = useScrollAnimation(contactRef);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    countryCode: '+91'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', message: '', countryCode: '+91' }); // Clear form fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && (value.length > 10 || !/^\d*$/.test(value))) return; // Limit phone input to 10 digits and only numbers
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: e.target.value
    }));
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Hide message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="contact-container" id="contact">
      {isSubmitted && (
        <div className="flash-message">
          <p>Your message has been sent successfully!</p>
        </div>
      )}
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>

        <div
          ref={contactRef}
          className={`contact-wrapper ${isVisible ? "animate" : ""}`}
        >
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
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                required
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} ({country.country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
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
