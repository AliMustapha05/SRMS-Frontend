
import React from "react";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from "recharts";

import "../../styles/AdminDashboard/Charts.css";

function RepairStatusChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="admin-panel">
      <h3>Repair Tickets by Status</h3>

      <div className="admin-status-layout">
        <div className="admin-donut-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={1}
                stroke="none"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="admin-donut-center">
            <strong>{total}</strong>
            <span>Total</span>
          </div>
        </div>

        <div className="admin-status-legend">
          {data.map((item) => (
            <div className="admin-legend-row" key={item.name}>
              <span
                className="admin-legend-dot"
                style={{ backgroundColor: item.color }}
              />
              <span className="admin-legend-name">{item.name}</span>
              <strong>{item.value}</strong>
              <small>
                {total ? ((item.value / total) * 100).toFixed(1) : 0}%
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepairStatusChart;
