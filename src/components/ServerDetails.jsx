import React from "react";
import DiskUsageTable from "../components/DiskUsageTable";
import IISWebsitesTable from "../components/IISWebsitesTable";
import ServicesTable from "../components/ServicesTable";
import "../styles/ServerDetails.css";
import "../styles/TableStyles.css";

const ServerDetails = () => {
  // Dummy data (replace with API later)
  const serverInfo = {
    name: "UDAGON0094.udcn.udtrucks.net",
    status: "Green",
    cpu: "1.75%",
    memory: "13.11 GB / 64 GB (20.48%)",
    uptime: "4 days, 16 hrs, 13 mins",

    diskUsage: [
      { drive: "C:", total: 126.46, free: 56.42, used: 55.39 },
      { drive: "D:", total: 99.98, free: 67.39, used: 32.6 },
      { drive: "E:", total: 99.98, free: 43.27, used: 56.72 },
      { drive: "F:", total: 9.98, free: 9.95, used: 0.3 },
      { drive: "H:", total: 9.98, free: 9.94, used: 0.4 },
    ],

    websites: [
      { name: "Default Web Site", status: "Started" },
      { name: "GLS_AGE", status: "Started" },
      { name: "MACS_AGE", status: "Started" },
      { name: "MACSOPC_AGE", status: "Started" },
      { name: "NTRP_AGE", status: "Started" },
      { name: "ApplicationLauncher", status: "Started" },
      { name: "GLS_CENTRAL", status: "Started" },
    ],

    services: [
      {
        name: "ICS.AGE.Server",
        status: "Running",
        logonAs: "UDCN\\cs-ws-s-ICS-AGE-BV",
      },
      {
        name: "ICS.AGE.Services.ArchiveHistory",
        status: "Running",
        logonAs: "UDCN\\cs-ws-s-ICS-AGE-BV",
      },
      {
        name: "ICS.AGE.Services.ReceiveArrivalInfo",
        status: "Running",
        logonAs: "UDCN\\cs-ws-s-ICS-AGE-BV",
      },
    ],
  };

  return (
    <div className="server-details-container">
      <h2>Server: {serverInfo.name}</h2>

      <p className="server-status-text">
        Status: <span className="status-green">{serverInfo.status}</span>
      </p>

      {/* Info Cards */}
      <div className="info-row">
        <div className="info-box">CPU Usage: {serverInfo.cpu}</div>
        <div className="info-box">Memory Usage: {serverInfo.memory}</div>
        <div className="info-box">Uptime: {serverInfo.uptime}</div>
      </div>

      {/* Tables */}
      <DiskUsageTable data={serverInfo.diskUsage} />
      <IISWebsitesTable data={serverInfo.websites} />
      <ServicesTable data={serverInfo.services} />
    </div>
  );
};

export default ServerDetails;
