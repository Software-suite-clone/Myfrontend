import React, { useState } from "react";
import "./ClassPage.css";
import Classinside from "./Classinside";
import { MdAddToDrive } from "react-icons/md";

const ClassPage = () => {
  // State to handle navbar toggle
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className="class-page">
      {/* Navbar */}
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Toggle on button click
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul
          className={`navbar-links ${isNavbarCollapsed ? "collapse" : ""}`}
        >
          <li>Stream</li>
          <li>Classwork</li>
          <li>People</li>
          <li>Grades</li>
        </ul>
        <div className="navbar-icons">
          <i className="material-icons">event</i>
          <i className="material-icons"><MdAddToDrive /></i>
          <i className="material-icons">settings</i>
        </div>
      </nav>

      <Classinside />
    </div>
  );
};

export default ClassPage;
