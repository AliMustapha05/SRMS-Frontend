
import React from "react";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import "../../styles/AdminDashboard/Tables.css";

function TechnicianWorkload({ technicians }) {
  const maxRepairs = Math.max(
    1,
    ...technicians.map((technician) => technician.repairs)
  );

  return (
    <div className="admin-panel admin-table-panel">
      <div className="admin-panel-heading">
        <h3>Technician Workload</h3>
        <Link to="/admin/technicians" className="admin-view-all">
          View All →
        </Link>
      </div>

      <div className="admin-workload-list">
        {technicians.map((technician) => (
          <div className="admin-workload-item" key={technician.id}>
            <div
              className="admin-technician-avatar"
              style={{ color: technician.color }}
            >
              <UserRound size={22} />
            </div>

            <div className="admin-workload-info">
              <div className="admin-workload-heading">
                <strong>{technician.name}</strong>
                <span>{technician.repairs} repairs</span>
              </div>

              <div className="admin-progress-track">
                <div
                  className="admin-progress-fill"
                  style={{
                    width: `${(technician.repairs / maxRepairs) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicianWorkload;
