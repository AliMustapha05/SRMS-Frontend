
import React, { useState } from "react";
import {
  Menu, Search, Bell, ChevronDown,
  UserRound, ShieldCheck
} from "lucide-react";

import { dashboardNotifications } from "../../data/adminDashboardData";
import "../../styles/AdminDashboard/Header.css";

function Header({ admin, onMenuClick, search, onSearchChange }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const unread = dashboardNotifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <button
          className="admin-icon-button"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="admin-search">
          <Search size={19} />
          <input
            type="search"
            placeholder="Search repairs, customers, or devices..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <span>Ctrl + K</span>
        </div>
      </div>

      <div className="admin-header-right">
        <div className="admin-dropdown-container">
          <button
            className="admin-icon-button admin-notification-button"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            aria-label="Notifications"
            aria-expanded={showNotifications}
          >
            <Bell size={21} />
            {unread > 0 && (
              <span className="admin-notification-count">
                {unread}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="admin-dropdown">
              <h4>Notifications</h4>
              {dashboardNotifications.map((notification) => (
                <p key={notification.id}>
                  {notification.message}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="admin-header-divider" />

        <div className="admin-dropdown-container">
          <button
            className="admin-profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            aria-expanded={showProfile}
          >
            <div className="admin-avatar">
              <UserRound size={23} />
            </div>

            <div className="admin-profile-info">
              <strong>{admin.name}</strong>
              <span>{admin.role}</span>
            </div>

            <ChevronDown size={17} />
          </button>

          {showProfile && (
            <div className="admin-dropdown admin-profile-dropdown">
              <h4>{admin.name}</h4>
              <p>{admin.email}</p>
              <p><ShieldCheck size={15} /> {admin.role}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
