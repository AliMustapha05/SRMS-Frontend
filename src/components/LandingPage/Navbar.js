
import React, { useState } from "react";
import {
  Wrench,
  Settings,
  UserRound,
  Menu,
  X,
} from "lucide-react";

import "../../styles/LandingPage/Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Supported Devices", href: "#devices" },
  { label: "How It Works", href: "#tracking" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ shop = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixtech-navbar">
      <div className="container fixtech-nav-inner">
        <a
          href="#home"
          className="fixtech-brand"
          onClick={closeMenu}
          aria-label="FixTech Home"
        >
          <div className="fixtech-brand-icon">
            <Wrench size={24} strokeWidth={2.5} />
            <Settings
              size={13}
              strokeWidth={2.5}
              className="fixtech-brand-gear"
            />
          </div>

          <div className="fixtech-brand-text">
            <span className="fixtech-brand-name">
              {shop.name || "FixTech"}
            </span>

            <span className="fixtech-brand-tagline">
              {shop.tagline || "Repair & Support"}
            </span>
          </div>
        </a>

        <nav
          className={`fixtech-nav-links ${
            menuOpen ? "is-open" : ""
          }`}
          id="fixtech-navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className="fixtech-login-button fixtech-mobile-login"
            onClick={closeMenu}
            disabled
            title="Employee login is coming soon"
          >
            <UserRound size={17} />
            Employee Login
          </button>
        </nav>

        <div className="fixtech-nav-actions">
          <button
            type="button"
            className="fixtech-login-button fixtech-desktop-login"
            disabled
            title="Employee login is coming soon"
          >
            <UserRound size={17} />
            Employee Login
          </button>

          <button
            type="button"
            className="fixtech-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="fixtech-navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
