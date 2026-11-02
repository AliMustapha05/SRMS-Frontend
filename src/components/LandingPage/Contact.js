
import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  Map,
  ExternalLink,
} from "lucide-react";

import "../../styles/LandingPage/Contact.css";

function Contact({ contact = {} }) {
  const phone = contact.phone?.trim();
  const whatsapp = contact.whatsapp?.trim();
  const email = contact.email?.trim();
  const address = contact.address?.trim();

  const whatsappNumber = whatsapp?.replace(/\D/g, "");
  const phoneNumber = phone?.replace(/[^\d+]/g, "");

  const contactItems = [
    {
      title: "Phone Number",
      value: phone || "Phone number coming soon",
      Icon: Phone,
      href: phone ? `tel:${phoneNumber}` : null,
    },
    {
      title: "WhatsApp",
      value: whatsapp || "WhatsApp coming soon",
      Icon: MessageCircle,
      href: whatsappNumber
        ? `https://wa.me/${whatsappNumber}`
        : null,
    },
    {
      title: "Email Address",
      value: email || "Email coming soon",
      Icon: Mail,
      href: email ? `mailto:${email}` : null,
    },
    {
      title: "Our Location",
      value: address || "Address coming soon",
      Icon: MapPin,
      href: contact.mapUrl || null,
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">CONTACT US</span>
          <h2>Get in Touch</h2>
          <p>
            Have a question or need a device repaired?
            We're here to help.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-info-grid">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div className="contact-item-icon">
                      <item.Icon size={25} strokeWidth={2} />
                    </div>

                    <div className="contact-item-text">
                      <h3>{item.title}</h3>
                      <p>{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    className="contact-info-card"
                    href={item.href}
                    target={
                      item.href.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="contact-info-card"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-hours">
              <div className="contact-hours-heading">
                <Clock3 size={23} />
                <h3>Opening Hours</h3>
              </div>

              {contact.openingHours?.length ? (
                <ul>
                  {contact.openingHours.map((hours, index) => (
                    <li key={index}>{hours}</li>
                  ))}
                </ul>
              ) : (
                <p>Opening hours coming soon.</p>
              )}
            </div>
          </div>

          <div className="contact-map">
            {contact.mapImageUrl ? (
              <img
                src={contact.mapImageUrl}
                alt="FixTech shop location map"
                className="contact-map-image"
              />
            ) : (
              <div className="contact-map-placeholder">
                <Map size={62} strokeWidth={1.3} />
                <h3>Find Our Workshop</h3>
                <p>
                  Our location map will appear here
                  when the shop address is confirmed.
                </p>
              </div>
            )}

            {contact.mapUrl && (
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                Open in Google Maps
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
