import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>
            <u>About Us</u>
          </h3>
          <p>
            <b className="footer-name">Ganesh Wooden Furniture</b> crafts
            exceptional wooden furniture combining traditional craftsmanship
            with modern design since 2010.
          </p>
        </div>

        <div className="footer-section">
          <h3>
            <u>Quick Links</u>
          </h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>
            <u>Contact Info</u>
          </h3>
          <ul>
            <li>
              <a href="/" onClick={() => window.location.reload()}>
                Ganesh Wooden Furniture
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=Rajkot,+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajkot, Gujarat
              </a>
            </li>
            <li>
              Phone: <a href="tel:+919099702417">+91 90997 02417</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:thoriya0221@gmail.com">thoriya0221@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Business Hours</h3>
          <ul>
            <li>Monday - Saturday</li>
            <li>9:00 AM - 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; <b>2025 Ganesh Wooden Furniture . All rights reserved.</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
