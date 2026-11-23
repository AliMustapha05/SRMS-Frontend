
import React from "react";
import {
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

import "../../styles/AdminDashboard/Charts.css";

function MonthlyRepairChart({ data }) {
  return (
    <div className="admin-panel">
      <h3>Monthly Repair Volume</h3>

      <div className="admin-chart-container">
        <ResponsiveContainer width="100%" height={245}>
          <AreaChart
            data={data}
            margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="repairGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f8cff" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#2f8cff" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#edf1f7" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="repairs"
              stroke="#1677ff"
              strokeWidth={3}
              fill="url(#repairGradient)"
              dot={{ r: 4, fill: "#1677ff" }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyRepairChart;
