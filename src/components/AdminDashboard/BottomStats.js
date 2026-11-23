
import React from "react";
import {
  BriefcaseBusiness, Clock3, Users,
  CreditCard, ArrowUpRight, ArrowDownRight
} from "lucide-react";

import "../../styles/AdminDashboard/StatsCards.css";

const icons = {
  BriefcaseBusiness,
  Clock3,
  Users,
  CreditCard,
};

function BottomStats({ metrics }) {
  const formatValue = (metric) => {
    if (metric.format === "currency") {
      return `$ ${metric.value.toLocaleString()}`;
    }

    return `${metric.value}${metric.suffix || ""}`;
  };

  return (
    <div className="admin-bottom-stats">
      {metrics.map((metric) => {
        const Icon = icons[metric.icon] || Users;
        const TrendIcon = metric.direction === "up"
          ? ArrowUpRight
          : ArrowDownRight;

        return (
          <div className="admin-bottom-stat" key={metric.id}>
            <div className="admin-bottom-icon">
              <Icon size={23} />
            </div>

            <div className="admin-bottom-info">
              <p>{metric.title}</p>

              <div className="admin-bottom-value">
                <strong>{formatValue(metric)}</strong>
                <span className={
                  metric.direction === "down"
                    ? "trend-down"
                    : "trend-up"
                }>
                  <TrendIcon size={14} />
                  {metric.change}%
                </span>
              </div>

              <small>vs. last month</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BottomStats;
