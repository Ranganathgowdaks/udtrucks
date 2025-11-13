import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dailyprod.css";

const DailyBV = () => {
  const bvServers = [
    { name: "UDAGON0094.udcn.udtrucks.net", status: "Running" },
    { name: "UDGOTN0358.udcn.udtrucks.net", status: "Maintenance" },
    { name: "UDCHSN1120.udcn.udtrucks.net", status: "Running" },
  ];

  return (
    <div className="dailyprod-container">
      <div className="dailyprod-box">
        <h2>Daily BV Servers Health Report</h2>

        <table className="newprod-table">
          <thead>
            <tr>
              <th>Server Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bvServers.map((server, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/server/${index + 1}`} className="server-link">
                    {server.name}
                  </Link>
                </td>
                <td>
                  <span
                    className={`status-badge ${server.status.toLowerCase()}`}
                  >
                    {server.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyBV;
