import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('.about-container');
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToGallery = (e) => {
    e.preventDefault();
    const gallerySection = document.querySelector('.gallery-container');
    window.scrollTo({
      top: gallerySection.offsetTop,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('.contact-container');
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <span>Ganesh</span>Wood Work
        </h1>
        
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-link" onClick={scrollToTop}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={scrollToAbout}>
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link" onClick={scrollToGallery}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={scrollToContact}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;