import React, { useRef, useState } from "react";
import "./Gallery.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Import images from assets
import LivingRoom from "../assets/livingRoom.jpg";
import Kitchen from "../assets/kitchen.jpg";
import Bedroom from "../assets/bedroom.jpg";
import DiningRoom from "../assets/diningRoom.jpg";
import Office from "../assets/office.jpg";
import Patio from "../assets/patio.jpg";
import Bathroom from "../assets/bathroom.jpg";

const images = [
  {
    src: LivingRoom,
    alt: "Living Room Furniture",
    title: "Living Room Collection",
    subtitle: "Crafted for comfort and style",
  },
  {
    src: Bedroom,
    alt: "Bedroom Furniture",
    title: "Bedroom Series",
    subtitle: "Designed for peaceful rest",
  },
  {
    src: Kitchen,
    alt: "Dining Room Furniture",
    title: "Kitchen Collection",
    subtitle: "Perfect for family gatherings",
  },
];

const additionalImages = [
  { src: DiningRoom, alt: "Dining Room Furniture" },
  { src: Office, alt: "Office Furniture" },
  { src: Patio, alt: "Patio Furniture" },
  { src: Bathroom, alt: "Bathroom Furniture" },
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const isVisible = useScrollAnimation(galleryRef);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentModalImages, setCurrentModalImages] = useState([]);
  const [largeImageOpen, setLargeImageOpen] = useState(false);
  const [largeImageSrc, setLargeImageSrc] = useState("");

  const openModal = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
    switch (index) {
      case 0:
        setCurrentModalImages([
          { src: LivingRoom, alt: "Living Room Furniture" },
          { src: DiningRoom, alt: "Dining Room Furniture" },
          { src: DiningRoom, alt: "Dining Room Furniture" },
          { src: DiningRoom, alt: "Dining Room Furniture" },
          { src: DiningRoom, alt: "Dining Room Furniture" },
          { src: DiningRoom, alt: "Dining Room Furniture" },
          { src: Office, alt: "Office Furniture" },
        ]);
        break;
      case 1:
        setCurrentModalImages([
          { src: Bedroom, alt: "Bedroom Furniture" },
          { src: Patio, alt: "Patio Furniture" },
          { src: Bathroom, alt: "Bathroom Furniture" },
        ]);
        break;
      case 2:
        setCurrentModalImages([
          { src: Kitchen, alt: "Dining Room Furniture" },
          { src: LivingRoom, alt: "Living Room Furniture" },
          { src: Bedroom, alt: "Bedroom Furniture" },
        ]);
        break;
      default:
        setCurrentModalImages([]);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setModalOpen(true);
    setCurrentModalImages([{ src: images[index].src, alt: images[index].alt }]);
  };

  const handleModalImageClick = (src) => {
    setLargeImageSrc(src);
    setLargeImageOpen(true);
  };

  const closeLargeImage = () => {
    setLargeImageOpen(false);
  };

  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-content">
        <h1 className="gallery-title">Our Gallery</h1>

        <div
          ref={galleryRef}
          className={`gallery-grid ${isVisible ? "animate" : ""}`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="overlay"></div>
              <div className="item-content">
                <h2>{image.title}</h2>
                <h3>{image.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal hide-scrollbar" onClick={handleOutsideClick}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <div className="main-image-container">
              <img
                className="main-image"
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                onClick={handleOutsideClick}
              />
              <div className="modal-caption">
                <h2>{images[currentImage].title}</h2>
                <h3>{images[currentImage].subtitle}</h3>
              </div>
            </div>
            <div className="modal-gallery">
              {currentModalImages.map((image, index) => (
                <div
                  key={index}
                  className="modal-gallery-item"
                  onClick={() => handleModalImageClick(image.src)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {largeImageOpen && (
        <div className="large-image-modal" onClick={closeLargeImage}>
          <img className="large-image" src={largeImageSrc} alt="Large view" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
