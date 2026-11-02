
import React from "react";
import {
  ArrowRight,
  ClipboardList,
  Phone,
} from "lucide-react";

import "../../styles/LandingPage/Hero.css";

function Hero({ hero = {} }) {
  return (
    <section
      className="hero-section"
      id="home"
    >
      {hero.imageUrl && (
        <img
          src={hero.imageUrl}
          alt=""
          className="hero-background-image"
          aria-hidden="true"
        />
      )}

      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">
              {hero.title || "Reliable Electronics Repair,"}
            </span>

            <span className="hero-highlight">
              {hero.highlight || "Made Smarter."}
            </span>
          </h1>

          <p className="hero-description">
            {hero.description ||
              "Professional repair services for laptops, computers, smartphones, tablets and other electronic devices."}
          </p>

          <div className="hero-buttons">
            <a
              href="#services"
              className="hero-button hero-primary-button"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>

            <a
              href="#tracking"
              className="hero-button hero-secondary-button"
            >
              <ClipboardList size={18} />
              Track Your Repair
            </a>

            <a
              href="#contact"
              className="hero-button hero-contact-button"
            >
              <Phone size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
