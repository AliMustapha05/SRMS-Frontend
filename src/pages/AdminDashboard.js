
import React, { useState } from "react";
import {
  CalendarDays, ChevronDown
} from "lucide-react";

import Sidebar from "../components/AdminDashboard/Sidebar";
import Header from "../components/AdminDashboard/Header";
import StatsCards from "../components/AdminDashboard/StatsCards";
import RepairStatusChart from "../components/AdminDashboard/RepairStatusChart";
import MonthlyRepairChart from "../components/AdminDashboard/MonthlyRepairChart";
import RevenueChart from "../components/AdminDashboard/RevenueChart";
import RecentRepairs from "../components/AdminDashboard/RecentRepairs";
import LowStockParts from "../components/AdminDashboard/LowStockParts";
import TechnicianWorkload from "../components/AdminDashboard/TechnicianWorkload";
import BottomStats from "../components/AdminDashboard/BottomStats";

import {
  adminInfo,
  dashboardNavigation,
  repairStatuses,
  recentRepairs,
  inventoryParts,
  technicians,
  monthlyRepairVolume,
  weeklyRevenue,
  dashboardTrends,
  businessMetrics
} from "../data/adminDashboardData";

import "../styles/AdminDashboard/AdminDashboard.css";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const getStatusCount = (name) =>
    repairStatuses.find((item) => item.name === name)?.value || 0;

  const totalRepairs = repairStatuses.reduce(
    (sum, item) => sum + item.value, 0
  );

  const stats = [
    {
      id: 1, title: "Total Repair Tickets",
      value: totalRepairs, icon: "Wrench",
      color: "blue", ...dashboardTrends.total
    },
    {
      id: 2, title: "Awaiting Inspection",
      value: getStatusCount("Pending Inspection"),
      icon: "Clock3", color: "orange",
      ...dashboardTrends.pending
    },
    {
      id: 3, title: "In Progress",
      value: getStatusCount("In Progress"),
      icon: "Settings", color: "blue",
      ...dashboardTrends.progress
    },
    {
      id: 4, title: "Waiting for Parts",
      value: getStatusCount("Waiting for Parts"),
      icon: "Package", color: "purple",
      ...dashboardTrends.parts
    },
    {
      id: 5, title: "Ready for Pickup",
      value: getStatusCount("Ready for Pickup"),
      icon: "Check", color: "green",
      ...dashboardTrends.pickup
    },
    {
      id: 6, title: "Delivered",
      value: getStatusCount("Completed"),
      icon: "Truck", color: "teal",
      ...dashboardTrends.delivered
    }
  ];

  const filteredRepairs = recentRepairs.filter((repair) =>
    Object.values(repair).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="admin-dashboard">
      <Sidebar
        navigation={dashboardNavigation}
        open={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        <Header
          admin={adminInfo}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          search={search}
          onSearchChange={setSearch}
        />

        <main className="admin-content">
          <div className="admin-welcome">
            <div>
              <h1>Welcome back, {adminInfo.name}</h1>
              <p>Here's what's happening with your repair shop today.</p>
            </div>

            <div className="admin-date-display">
              <CalendarDays size={17} />
              <span>Apr 15, 2026 - Apr 22, 2026</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <StatsCards stats={stats} />

          <div className="admin-charts-grid">
            <RepairStatusChart data={repairStatuses} />
            <MonthlyRepairChart data={monthlyRepairVolume} />
            <RevenueChart data={weeklyRevenue} />
          </div>

          <div className="admin-details-grid">
            <RecentRepairs repairs={filteredRepairs} />
            <LowStockParts parts={inventoryParts} />
            <TechnicianWorkload technicians={technicians} />
          </div>

          <BottomStats metrics={businessMetrics} />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
