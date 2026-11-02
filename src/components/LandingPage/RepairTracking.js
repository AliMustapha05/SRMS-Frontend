
import React, { useState } from "react";
import {
  Search,
  ClipboardList,
  Info,
  ArrowRight,
} from "lucide-react";

import "../../styles/LandingPage/RepairTracking.css";

function RepairTracking() {
  const [ticketId, setTicketId] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!ticketId.trim()) {
      setMessage("Please enter your repair ticket ID.");
      return;
    }

    setMessage(
      "Live repair tracking will be available when the repair management system is connected."
    );
  }

  return (
    <section className="tracking-section" id="tracking">
      <div className="container">
        <div className="tracking-card">
          <div className="tracking-content">
            <span className="tracking-label">
              <ClipboardList size={14} />
              REPAIR STATUS
            </span>

            <h2>Track Your Repair</h2>

            <p>
              Enter your repair ticket ID to check the
              latest status of your device.
            </p>
          </div>

          <div className="tracking-form-container">
            <form
              className="tracking-form"
              onSubmit={handleSubmit}
            >
              <div className="tracking-input-wrapper">
                <Search size={18} />

                <input
                  type="text"
                  className="tracking-input"
                  placeholder="Enter your Ticket ID"
                  value={ticketId}
                  onChange={(event) => {
                    setTicketId(event.target.value);
                    setMessage("");
                  }}
                  aria-label="Repair ticket ID"
                />
              </div>

              <button
                type="submit"
                className="tracking-button"
              >
                Track Repair
                <ArrowRight size={16} />
              </button>
            </form>

            <p className="tracking-info">
              <Info size={14} />
              Your ticket ID is provided when you
              register your device at our shop.
            </p>

            {message && (
              <p className="tracking-message" role="status">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepairTracking;
