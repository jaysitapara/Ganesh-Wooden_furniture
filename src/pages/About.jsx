import React, { useRef } from "react";
import "./About.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
// Import images
import Commitment from "../assets/commitment.jpg";
import Story from "../assets/story.jpg";

const About = () => {
  const featuresRef = useRef(null);
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const isVisible = useScrollAnimation(featuresRef);
  const isFirstSectionVisible = useScrollAnimation(firstSectionRef);
  const isSecondSectionVisible = useScrollAnimation(secondSectionRef);

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <h1 className="about-title">About Ganesh Wooden Furniture</h1>

        <div
          ref={firstSectionRef}
          className={`about-section ${isFirstSectionVisible ? "animate" : ""}`}
        >
          <div className="about-text">
            <h2>
              <u>Our Story</u>
            </h2>
            <p>
              Founded in 2010, <b>Ganesh Wooden Furniture</b> has been crafting
              exceptional wooden furniture that combines traditional
              craftsmanship with modern design. Our dedication to quality and
              attention to detail has made us a trusted name in the furniture
              industry.
            </p>
          </div>
          <div className="about-image">
            <img src={Story} alt="Our Workshop" />
          </div>
        </div>

        <div
          ref={secondSectionRef}
          className={`about-section reverse ${
            isSecondSectionVisible ? "animate" : ""
          }`}
        >
          <div className="about-text">
            <h2>
              <u>Our Commitment</u>
            </h2>
            <p>
              We believe in sustainable practices and source our materials
              responsibly. Each piece of furniture is handcrafted by our skilled
              artisans, ensuring the highest quality and durability for our
              customers.
            </p>
          </div>
          <div className="about-image">
            <img src={Commitment} alt="Crafting Process" />
          </div>
        </div>

        <div
          ref={featuresRef}
          className={`features ${isVisible ? "animate" : ""}`}
        >
          <div className="feature-card">
            <h3>
              <u>Quality Materials</u>
            </h3>
            <p>Premium wood selection for lasting durability</p>
          </div>
          <div className="feature-card">
            <h3>
              <u>Expert Craftsmanship</u>
            </h3>
            <p>Skilled artisans with years of experience</p>
          </div>
          <div className="feature-card">
            <h3>
              <u>Custom Designs</u>
            </h3>
            <p>Personalized furniture to match your style</p>
          </div>
          <div className="feature-card">
            <h3>
              <u>Custom Designs</u>
            </h3>
            <p>Personalized furniture to match your style</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
