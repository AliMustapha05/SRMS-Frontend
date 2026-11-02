
import React from "react";
import {
  Wrench,
  Settings,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

import "../../styles/LandingPage/Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Supported Devices", href: "#devices" },
  { label: "Track Repair", href: "#tracking" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Footer({ shop = {}, contact = {} }) {
  const year = new Date().getFullYear();

  const phone = contact.phone?.trim();
  const whatsapp = contact.whatsapp?.trim();
  const email = contact.email?.trim();

  const phoneNumber = phone?.replace(/[^\d+]/g, "");
  const whatsappNumber = whatsapp?.replace(/\D/g, "");

  return (
    <footer className="fixtech-footer">
      <div className="container">
        <div className="fixtech-footer-main">
          <div className="fixtech-footer-about">
            <a href="#home" className="fixtech-footer-brand">
              <div className="fixtech-footer-brand-icon">
                <Wrench size={25} />
                <Settings
                  size={13}
                  className="fixtech-footer-gear"
                />
              </div>

              <div>
                <span className="fixtech-footer-brand-name">
                  {shop.name || "FixTech"}
                </span>

                <span className="fixtech-footer-tagline">
                  {shop.tagline || "Repair & Support"}
                </span>
              </div>
            </a>

            <p>
              Reliable electronics repair and technical
              support for smartphones, laptops, computers,
              tablets and more.
            </p>

            <a
              href="#home"
              className="fixtech-back-to-top"
            >
              <ArrowUp size={16} />
              Back to Top
            </a>
          </div>

          <div className="fixtech-footer-column">
            <h3>Quick Links</h3>

            <nav
              className="fixtech-footer-links"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="fixtech-footer-column">
            <h3>Our Services</h3>

            <div className="fixtech-footer-links">
              <a href="#services">Smartphone Repair</a>
              <a href="#services">Laptop Repair</a>
              <a href="#services">Computer Repair</a>
              <a href="#services">Hardware Diagnostics</a>
              <a href="#services">Software Support</a>
            </div>
          </div>

          <div className="fixtech-footer-column">
            <h3>Contact Us</h3>

            <div className="fixtech-footer-contact">
              <div>
                <Phone size={17} />
                {phone ? (
                  <a href={`tel:${phoneNumber}`}>
                    {phone}
                  </a>
                ) : (
                  <span>Phone coming soon</span>
                )}
              </div>

              <div>
                <MessageCircle size={17} />
                {whatsappNumber ? (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                ) : (
                  <span>WhatsApp coming soon</span>
                )}
              </div>

              <div>
                <Mail size={17} />
                {email ? (
                  <a href={`mailto:${email}`}>
                    {email}
                  </a>
                ) : (
                  <span>Email coming soon</span>
                )}
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  {contact.address ||
                    "Location coming soon"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="fixtech-footer-bottom">
          <p>
            © {year} {shop.name || "FixTech"}.
            All rights reserved.
          </p>

          <p>
            Electronics Repair & Technical Support
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
