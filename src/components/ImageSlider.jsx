import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import image1 from '../assets/slide1.jpg';
import image2 from '../assets/slide2.jpg';
import image3 from '../assets/slide3.jpg';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: image1,
      title: "The designer focused on creating a interior"
    },
    {
      url: image2,
      title: "The interior was luxurious and spacious"
    },
    {
      url: image3,
      title: "Interior storage in the chaise piece the couch"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img 
            src={slide.url} 
            alt={slide.title}
            loading="eager"
          />
          <h1 className="slide-title">{slide.title}</h1>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;