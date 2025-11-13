import React from "react";
import { Link } from "react-router-dom";
import { MdStorage, MdManageSearch } from "react-icons/md"; // icons
import "../styles/DailyMenu.css";

const DailyMenu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Daily Servers Health Reports</h1>

      <div className="menu-buttons">
        {/* BV CARD */}
        <Link to="/daily-bv" className="menu-card">
          <MdManageSearch className="menu-icon" />
          <h2>Daily BV Servers Health Report</h2>
          <p>View health status of all BV environment servers</p>
        </Link>

        {/* PROD CARD */}
        <Link to="/daily-prod" className="menu-card">
          <MdStorage className="menu-icon" />
          <h2>Daily PROD Servers Health Report</h2>
          <p>View health status of production environment servers</p>
        </Link>
      </div>
    </div>
  );
};

export default DailyMenu;
