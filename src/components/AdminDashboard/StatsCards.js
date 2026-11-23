
import React from "react";
import {
  Wrench, Clock3, Settings, Package,
  Check, Truck, ArrowUpRight, ArrowDownRight
} from "lucide-react";

import "../../styles/AdminDashboard/StatsCards.css";

const icons = {
  Wrench, Clock3, Settings, Package, Check, Truck
};

function StatsCards({ stats }) {
  return (
    <div className="admin-stats-grid">
      {stats.map((stat) => {
        const Icon = icons[stat.icon] || Wrench;
        const TrendIcon = stat.direction === "up"
          ? ArrowUpRight
          : ArrowDownRight;

        return (
          <div className="admin-stat-card" key={stat.id}>
            <div className={`admin-stat-icon ${stat.color}`}>
              <Icon size={26} />
            </div>

            <h2>{stat.value}</h2>
            <p>{stat.title}</p>

            <div className="admin-stat-footer">
              <span className="admin-stat-trend">
                <TrendIcon size={15} />
                {stat.change}%
              </span>
              <small>vs. last week</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;
