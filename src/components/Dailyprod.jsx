import React from "react";
import { Link } from "react-router-dom"; // import Link for navigation
import "../styles/Dailyprod.css";

const Dailyprod = () => {
  const serverData = [
    { name: "Server 1", status: "Running" },
    { name: "Server 2", status: "Stopped" },
    { name: "Server 3", status: "Running" },
    { name: "Server 4", status: "Maintenance" },
    { name: "Server 5", status: "Running" },
  ];

  return (
    <div className="dailyprod-container">
      <div className="dailyprod-box">
        <h2>Daily Production Status</h2>
        <table className="dailyprod-table">
          <thead>
            <tr>
              <th>Server Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {serverData.map((server, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/server/${index + 1}`} className="server-link">
                    {server.name}
                  </Link>
                </td>
                <td className={`status ${server.status.toLowerCase()}`}>
                  {server.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dailyprod;
