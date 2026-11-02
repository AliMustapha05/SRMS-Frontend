
import React from "react";
import {
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  Cpu,
} from "lucide-react";

import "../../styles/LandingPage/SupportedDevices.css";

const deviceIcons = {
  smartphones: Smartphone,
  smartphone: Smartphone,
  laptops: Laptop,
  laptop: Laptop,
  desktops: Monitor,
  computers: Monitor,
  tablets: Tablet,
  tablet: Tablet,
  "other devices": Headphones,
};

function SupportedDevices({ devices = [], imageUrl }) {
  return (
    <section className="devices-section" id="devices">
      <div className="container devices-container">
        <div className="devices-content">
          <span className="section-label">
            SUPPORTED DEVICES
          </span>

          <h2 className="devices-heading">
            We Repair All Major Devices
          </h2>

          <p className="devices-description">
            From smartphones to computers and more,
            we've got you covered.
          </p>

          <div className="devices-list">
            {devices.map((device) => {
              const key = device.name.trim().toLowerCase();
              const Icon = deviceIcons[key] || Cpu;

              return (
                <div className="device-item" key={device.id}>
                  <div className="device-icon">
                    <Icon size={27} strokeWidth={2} />
                  </div>

                  <span className="device-name">
                    {device.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="devices-image-container">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Electronic devices repaired by FixTech"
              className="devices-image"
            />
          ) : (
            <div className="devices-image-placeholder">
              <Laptop size={90} strokeWidth={1.2} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SupportedDevices;
