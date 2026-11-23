
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/AdminDashboard/Tables.css";

const statusClasses = {
  "Received": "received",
  "Pending Inspection": "pending",
  "In Progress": "progress",
  "Waiting for Parts": "waiting",
  "Ready for Pickup": "ready",
  "Completed": "completed",
  "Cancelled": "cancelled",
};

function RecentRepairs({ repairs }) {
  return (
    <div className="admin-panel admin-table-panel">
      <div className="admin-panel-heading">
        <h3>Recent Repair Tickets</h3>
        <Link to="/admin/repairs" className="admin-view-all">
          View All →
        </Link>
      </div>

      <div className="admin-table-scroll">
        <table className="admin-data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket / Device</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Technician</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>
            {repairs.map((repair, index) => (
              <tr key={repair.id}>
                <td>{index + 1}</td>
                <td>
                  <strong>{repair.id}</strong>
                  <span className="admin-table-subtitle">
                    {repair.device}
                  </span>
                </td>
                <td>{repair.customer}</td>
                <td>
                  <span className={`admin-status-badge ${
                    statusClasses[repair.status] || "received"
                  }`}>
                    {repair.status}
                  </span>
                </td>
                <td>{repair.technician}</td>
                <td>{repair.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {repairs.length === 0 && (
          <p className="admin-empty">No matching repairs found.</p>
        )}
      </div>
    </div>
  );
}

export default RecentRepairs;
