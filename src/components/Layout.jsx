import React from "react";
import { Outlet } from "react-router-dom"; // For nested routing
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="mainContent">
        <div className="pageContent">
          <Outlet /> {/* Render child routes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
