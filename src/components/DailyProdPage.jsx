import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dailyprod.css";

const DailyProdPage = () => {
  const prodServers = [
    { name: "UDGWHR2211.udcn.udtrucks.net", status: "Running" },
    { name: "UDGMDM0052.udcn.udtrucks.net", status: "Stopped" },
    { name: "UDGQCT9901.udcn.udtrucks.net", status: "Running" },
    { name: "UDGTLS5540.udcn.udtrucks.net", status: "Maintenance" },
  ];

  return (
    <div className="dailyprod-container">
      <div className="dailyprod-box">
        <h2>Daily PROD Servers Health Report</h2>

        <table className="newprod-table">
          <thead>
            <tr>
              <th>Server Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {prodServers.map((server, index) => (
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

export default DailyProdPage;
