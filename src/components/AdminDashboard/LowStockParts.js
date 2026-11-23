
import React from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import "../../styles/AdminDashboard/Tables.css";

function LowStockParts({ parts }) {
  const lowStock = parts.filter(
    (part) => part.stock < part.minimum
  );

  return (
    <div className="admin-panel admin-table-panel">
      <div className="admin-panel-heading">
        <h3>Low Stock Parts</h3>
        <Link to="/admin/inventory" className="admin-view-all">
          View All →
        </Link>
      </div>

      <div className="admin-table-scroll">
        <table className="admin-data-table">
          <thead>
            <tr>
              <th>Part Name</th>
              <th>Current Stock</th>
              <th>Min. Stock</th>
            </tr>
          </thead>
          <tbody>
            {lowStock.map((part) => (
              <tr key={part.id}>
                <td>
                  <span className="admin-part-name">
                    <Package size={16} />
                    {part.name}
                  </span>
                </td>
                <td>
                  <span className="admin-low-stock">
                    {part.stock}
                  </span>
                </td>
                <td>{part.minimum}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {lowStock.length === 0 && (
          <p className="admin-empty">All parts are sufficiently stocked.</p>
        )}
      </div>
    </div>
  );
}

export default LowStockParts;
