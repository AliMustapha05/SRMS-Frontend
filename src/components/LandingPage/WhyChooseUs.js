
import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Wrench,
  CheckCircle2,
} from "lucide-react";

import "../../styles/LandingPage/WhyChooseUs.css";

const benefitIcons = {
  "Quality Service": ShieldCheck,
  "Customer Focus": HeartHandshake,
  "Expert Technicians": Wrench,
};

function WhyChooseUs({ benefits = [] }) {
  return (
    <div className="why-choose-us">
      {benefits.map((benefit) => {
        const Icon =
          benefitIcons[benefit.title] || CheckCircle2;

        return (
          <div className="benefit-item" key={benefit.id}>
            <span className="benefit-icon">
              <Icon size={21} strokeWidth={2} />
            </span>

            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WhyChooseUs;
