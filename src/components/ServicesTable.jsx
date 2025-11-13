import React from "react";
import "../styles/TableStyles.css";

const ServicesTable = ({ data }) => {
  return (
    <div className="detail-box">
      <h3>Services</h3>
      <table>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Status</th>
            <th>LogonAs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service, i) => (
            <tr key={i}>
              <td>{service.name}</td>
              <td>
                <span
                  className={
                    service.status === "Running"
                      ? "status-badge status-running"
                      : "status-badge status-stopped"
                  }
                >
                  {service.status}
                </span>
              </td>

              <td>{service.logonAs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
