import React from "react";
import "../styles/TableStyles.css";

const IISWebsitesTable = ({ data }) => {
  return (
    <div className="detail-box">
      <h3>IIS Websites</h3>
      <table>
        <thead>
          <tr>
            <th>Website Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((site, i) => (
            <tr key={i}>
              <td>{site.name}</td>
              <td>
                <span
                  className={
                    site.status === "Started"
                      ? "status-badge status-running"
                      : "status-badge status-stopped"
                  }
                >
                  {site.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IISWebsitesTable;
