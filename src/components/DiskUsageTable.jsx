import React from "react";
import "../styles/TableStyles.css";

const DiskUsageTable = ({ data }) => {
  return (
    <div className="detail-box">
      <h3>Disk Usage</h3>
      <table>
        <thead>
          <tr>
            <th>Drive</th>
            <th>Total (GB)</th>
            <th>Free (GB)</th>
            <th>Used %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.drive}</td>
              <td>{d.total}</td>
              <td>{d.free}</td>
              <td>
                <span
                  className={
                    d.used > 80
                      ? "status-badge status-stopped"
                      : "status-badge status-running"
                  }
                >
                  {d.used}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiskUsageTable;
