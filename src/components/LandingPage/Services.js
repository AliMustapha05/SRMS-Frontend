
import React from "react";
import {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Settings,
  Code2,
  BatteryCharging,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

import "../../styles/LandingPage/Services.css";

const serviceIcons = {
  "Smartphone Repair": Smartphone,
  "Laptop Repair": Laptop,
  "Desktop Computer Repair": Monitor,
  "Tablet Repair": Tablet,
  "Hardware Diagnostics": Settings,
  "Software Troubleshooting": Code2,
  "Battery & Charging": BatteryCharging,
  "Screen Replacement": MonitorSmartphone,
};

function Services({ services = [] }) {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">OUR SERVICES</span>

          <h2 className="services-heading">What We Do</h2>

          <p className="services-subtitle">
            We offer a wide range of repair services for all
            your electronic devices.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.name] || Wrench;

            return (
              <article className="service-card" key={service.id}>
                <div className="service-icon">
                  <Icon
                    size={29}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="service-title">
                  {service.name}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
