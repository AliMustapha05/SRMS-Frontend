
import React from "react";
import WhyChooseUs from "./WhyChooseUs";

import "../../styles/LandingPage/About.css";

function About({ about = {}, benefits = [] }) {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image-container">
          {about.imageUrl ? (
            <img
              src={about.imageUrl}
              alt="Electronics repair workbench"
              className="about-image"
            />
          ) : (
            <div className="about-image-placeholder">
              Repair workshop image
            </div>
          )}
        </div>

        <div className="about-content">
          <span className="section-label">
            ABOUT US
          </span>

          <h2 className="about-heading">
            {about.title || "Our Commitment"}
          </h2>

          <p className="about-description">
            {about.description}
          </p>

          <WhyChooseUs benefits={benefits} />
        </div>
      </div>
    </section>
  );
}

export default About;
