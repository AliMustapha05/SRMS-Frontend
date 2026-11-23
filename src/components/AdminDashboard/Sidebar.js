
import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Wrench, Settings, LayoutDashboard, Users,
  Smartphone, UserRound, ShoppingCart, CreditCard,
  ReceiptText, ChartNoAxesColumn, Bell,
  ClipboardList, LogOut, X
} from "lucide-react";

import "../../styles/AdminDashboard/Sidebar.css";

const iconMap = {
  LayoutDashboard, Users, Smartphone, Wrench,
  UserRound, ShoppingCart, CreditCard, ReceiptText,
  ChartNoAxesColumn, Bell, ClipboardList, Settings
};

function Sidebar({ navigation, open, closeSidebar }) {
  return (
    <>
      {open && (
        <div
          className="admin-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-sidebar-brand">
          <div className="admin-brand-icon">
            <Wrench size={28} />
          </div>
          <div>
            <h2><span>Fix</span>Tech</h2>
            <p>Repair & Support</p>
          </div>
          <button
            className="admin-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="admin-sidebar-nav">
          {navigation.map((item) => {
            const Icon = iconMap[item.icon] || Settings;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/admin"}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `admin-nav-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="admin-sidebar-bottom">
          <Link to="/login" className="admin-nav-link">
            <LogOut size={19} />
            <span>Logout (Demo)</span>
          </Link>
          <p>Smart Repair Management System</p>
          <small>v1.0.0</small>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
