
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

import "../../styles/AdminDashboard/Charts.css";

function RevenueChart({ data }) {
  return (
    <div className="admin-panel">
      <div className="admin-panel-heading">
        <h3>Revenue</h3>
        <span className="admin-period-label">This Month</span>
      </div>

      <div className="admin-chart-container">
        <ResponsiveContainer width="100%" height={245}>
          <BarChart
            data={data}
            margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#edf1f7" />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />

            <Bar
              dataKey="revenue"
              fill="#1da574"
              radius={[4, 4, 0, 0]}
              maxBarSize={55}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
