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
        <h1 className="about-title" style={{ textAlign: "left" }}>About Ganesh Wooden Furniture</h1>

        <div
          ref={firstSectionRef}
          className={`about-section ${isFirstSectionVisible ? "animate" : ""}`}
        >
          <div className="about-text">
            <div className="owner-info-column">
              <div className="owner-info" style={{ color: "black" }}>
                <h2 style={{ color: "black" }}>Jigar Thoriya</h2>
                <p>
                  <b>No:</b> <a href="tel:+9190997002417">+91 90997 002417</a>
                  <br />
                  <b>Email:</b>{" "}
                  <a href="mailto:thoriya0221@gmail.com">
                    thoriya0221@gmail.com
                  </a>
                </p>
              </div>
              <div className="owner-info">
                <h2 style={{ color: "black" }}>Bharat Sarvaiya</h2>
                <p>
                  <b>No:</b> <a href="tel:+919723080046">+91 97230 80046</a>
                  <br />
                  <b>Email:</b>{" "}
                  <a href="mailto:sarvaiya0221@gmail.com">
                    sarvaiya0221@gmail.com
                  </a>
                </p>
              </div>
            </div>
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
