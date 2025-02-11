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

// livingRoom
import living1 from "../assets/living1.jpg";
import living2 from "../assets/living2.jpg";
import living3 from "../assets/living3.jpg";
import living4 from "../assets/living4.jpg";
import living5 from "../assets/living5.jpg";
import living6 from "../assets/living6.jpg";
import living7 from "../assets/living7.jpg";
import living8 from "../assets/living8.jpg";
import living9 from "../assets/living9.jpg";
import living10 from "../assets/living10.jpg";
import living11 from "../assets/living11.jpg";
import living12 from "../assets/living12.jpg";
import living13 from "../assets/living13.jpg";
import living14 from "../assets/living14.jpg";
import living15 from "../assets/living15.jpg";
import living16 from "../assets/living16.jpg";
import living17 from "../assets/living17.jpg";
import living18 from "../assets/living18.jpg";
import living19 from "../assets/living19.jpg";
import living20 from "../assets/living20.jpg";

// bedroom
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";
import bedroom4 from "../assets/bedroom4.jpg";
import bedroom5 from "../assets/bedroom5.jpg";
import bedroom6 from "../assets/bedroom6.jpg";
import bedroom7 from "../assets/bedroom7.jpg";
import bedroom8 from "../assets/bedroom8.jpg";
import bedroom9 from "../assets/bedroom9.jpg";
import bedroom10 from "../assets/bedroom10.jpg";
import bedroom11 from "../assets/bedroom11.jpg";
import bedroom12 from "../assets/bedroom12.jpg";
import bedroom13 from "../assets/bedroom13.jpg";
import bedroom14 from "../assets/bedroom14.jpg";
import bedroom15 from "../assets/bedroom15.jpg";
import bedroom16 from "../assets/bedroom16.jpg";
import bedroom17 from "../assets/bedroom17.jpg";
import bedroom18 from "../assets/bedroom18.jpg";
import bedroom19 from "../assets/bedroom19.jpg";
import bedroom20 from "../assets/bedroom20.jpg";

// kitchen
import kitchen1 from "../assets/kitchen1.jpg";
import kitchen2 from "../assets/kitchen2.jpg";
import kitchen3 from "../assets/kitchen3.jpg";
import kitchen4 from "../assets/kitchen4.jpg";
import kitchen5 from "../assets/kitchen5.jpg";
import kitchen6 from "../assets/kitchen6.jpg";
import kitchen7 from "../assets/kitchen7.jpg";
import kitchen8 from "../assets/kitchen8.jpg";
import kitchen9 from "../assets/kitchen9.jpg";
import kitchen10 from "../assets/kitchen10.jpg";
import kitchen11 from "../assets/kitchen11.jpg";
import kitchen12 from "../assets/kitchen12.jpg";
import kitchen13 from "../assets/kitchen13.jpg";
import kitchen14 from "../assets/kitchen14.jpg";
import kitchen15 from "../assets/kitchen15.jpg";
import kitchen16 from "../assets/kitchen16.jpg";
import kitchen17 from "../assets/kitchen17.jpg";
import kitchen18 from "../assets/kitchen18.jpg";
import kitchen19 from "../assets/kitchen19.jpg";
import kitchen20 from "../assets/kitchen20.jpg";

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
    const livingRoomImages = [
      { src: living1, alt: "Living Room Furniture 1" },
      { src: living2, alt: "Living Room Furniture 2" },
      { src: living3, alt: "Living Room Furniture 3" },
      { src: living4, alt: "Living Room Furniture 4" },
      { src: living5, alt: "Living Room Furniture 5" },
      { src: living6, alt: "Living Room Furniture 6" },
      { src: living7, alt: "Living Room Furniture 7" },
      { src: living8, alt: "Living Room Furniture 8" },
      { src: living9, alt: "Living Room Furniture 9" },
      { src: living10, alt: "Living Room Furniture 10" },
      { src: living11, alt: "Living Room Furniture 11" },
      { src: living12, alt: "Living Room Furniture 12" },
      { src: living13, alt: "Living Room Furniture 13" },
      { src: living14, alt: "Living Room Furniture 14" },
      { src: living15, alt: "Living Room Furniture 15" },
      { src: living16, alt: "Living Room Furniture 16" },
      { src: living17, alt: "Living Room Furniture 17" },
      { src: living18, alt: "Living Room Furniture 18" },
      { src: living19, alt: "Living Room Furniture 19" },
      { src: living20, alt: "Living Room Furniture 20" },
    ];
    const bedroomImages = [
      { src: bedroom1, alt: "Bedroom Furniture 1" },
      { src: bedroom2, alt: "Bedroom Furniture 2" },
      { src: bedroom3, alt: "Bedroom Furniture 3" },
      { src: bedroom4, alt: "Bedroom Furniture 4" },
      { src: bedroom5, alt: "Bedroom Furniture 5" },
      { src: bedroom6, alt: "Bedroom Furniture 6" },
      { src: bedroom7, alt: "Bedroom Furniture 7" },
      { src: bedroom8, alt: "Bedroom Furniture 8" },
      { src: bedroom9, alt: "Bedroom Furniture 9" },
      { src: bedroom10, alt: "Bedroom Furniture 10" },
      { src: bedroom11, alt: "Bedroom Furniture 11" },
      { src: bedroom12, alt: "Bedroom Furniture 12" },
      { src: bedroom13, alt: "Bedroom Furniture 13" },
      { src: bedroom14, alt: "Bedroom Furniture 14" },
      { src: bedroom15, alt: "Bedroom Furniture 15" },
      { src: bedroom16, alt: "Bedroom Furniture 16" },
      { src: bedroom17, alt: "Bedroom Furniture 17" },
      { src: bedroom18, alt: "Bedroom Furniture 18" },
      { src: bedroom19, alt: "Bedroom Furniture 19" },
      { src: bedroom20, alt: "Bedroom Furniture 20" },
    ];
    const kitchenImages = [
      { src: kitchen1, alt: "Kitchen Furniture 1" },
      { src: kitchen2, alt: "Kitchen Furniture 2" },
      { src: kitchen3, alt: "Kitchen Furniture 3" },
      { src: kitchen4, alt: "Kitchen Furniture 4" },
      { src: kitchen5, alt: "Kitchen Furniture 5" },
      { src: kitchen6, alt: "Kitchen Furniture 6" },
      { src: kitchen7, alt: "Kitchen Furniture 7" },
      { src: kitchen8, alt: "Kitchen Furniture 8" },
      { src: kitchen9, alt: "Kitchen Furniture 9" },
      { src: kitchen10, alt: "Kitchen Furniture 10" },
      { src: kitchen11, alt: "Kitchen Furniture 11" },
      { src: kitchen12, alt: "Kitchen Furniture 12" },
      { src: kitchen13, alt: "Kitchen Furniture 13" },
      { src: kitchen14, alt: "Kitchen Furniture 14" },
      { src: kitchen15, alt: "Kitchen Furniture 15" },
      { src: kitchen16, alt: "Kitchen Furniture 16" },
      { src: kitchen17, alt: "Kitchen Furniture 17" },
      { src: kitchen18, alt: "Kitchen Furniture 18" },
      { src: kitchen19, alt: "Kitchen Furniture 19" },
      { src: kitchen20, alt: "Kitchen Furniture 20" },
    ];
    switch (index) {
      case 0:
        setCurrentModalImages(livingRoomImages);
        break;
      case 1:
        setCurrentModalImages(bedroomImages);
        break;
      case 2:
        setCurrentModalImages(kitchenImages);
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
