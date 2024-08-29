import React from "react";
import "./ClassPage.css";
import { Link } from "react-router-dom";

const ClassPage = () => {
  return (
    <div className="class-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li>Stream</li>
          <li>Classwork</li>
          <li>People</li>
          <li>Grades</li>
        </ul>
        <div className="navbar-icons">
          <i className="material-icons">event</i>
          <i className="material-icons">notifications</i>
          <i className="material-icons">settings</i>
        </div>
      </nav>

      {/* Class Header */}
      <div className="class-header">
        <div className="header-content">
          <h1 className="class-title">Demo</h1>
          <p className="class-section">A</p>
        </div>
        <button className="customize-btn">Customize</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Class Code */}
        <div className="class-code-container">
          <div className="class-code-header">
            <h3>Class code</h3>
            <i className="material-icons">more_vert</i>
          </div>
          <div className="class-code">
            <span>y7t2qr7</span>
            <i className="material-icons">fullscreen</i>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="upcoming-assignments">
          <h3>Upcoming</h3>
          <p>No work due soon</p>
          <a href="abc">View all</a>
        </div>

        {/* Announcements */}
        <div className="announcements">
          <div className="announcement-input">
            <img
             src={require("../img/profile.jpeg")} 
              alt="User"
              className="announcement-user-pic"
            />
            <Link to="xyz" className="announcement-input-field"
            >Announce something to your class</Link>
             </div>
          </div>
          <div className="previous-announcements">
            <div className="announcement">
              <p>
               
              </p>
              
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default ClassPage;
