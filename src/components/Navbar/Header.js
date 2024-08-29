import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
    <nav>
      <div className="nav-left">
      <img src={require("../img/Classroom_Logo.png")} alt="Logo" />

        <span className="title">Classroom</span>
        <Link to="/home">Home</Link>
      <a href='#####'>WELCOME</a>
      </div>
    </nav>
    </div>
  )
}

export default Header