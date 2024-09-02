import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Createclass from "../classc/Createclass";
import JoinClass from "../classc/JoinClass";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import UserService from '../service/UserService';
const Navbar = ({ toggleSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const isAuthenticated = UserService.isAuthenticated();

  const handlebuttonclick = () => {
    setShowMenu(!showMenu);
  };

  const handleJoinclass = () => {
    setJoinModal(true);
  };

  const handleCreateclass = () => {
    setShowModal(true);
  };

  const handleCreateClassClose = () => {
    setShowModal(false);
  };

  const handleJoinClassClose = () => {
    setJoinModal(false);
  };

  const handleLogout = () => {
    const confirmDelete = window.confirm('Are you sure you want to logout this user?');
    if (!confirmDelete) {
      window.location.reload();
        
    }
    else{
      UserService.logout();
    }
};

  return (
    <nav className="navbar navbar-expand-md  ">
      <div className="container-fluid">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"> &#9776; </i> {/* Sidebar toggle icon */}
        </button>
        <img
          className="img-logo"
          src={require("../img/Classroom_Logo.png")}
          alt="Logo"
        />
        <span className="navbar-brand">Classroom</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav   ms-auto">
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={handlebuttonclick}
              >
               <FaPlus />

              </button>
              {showMenu && (
                <div
                  className="dropdown-menu show"
                  style={{ position: "absolute" }}
                >
                  <button className="dropdown-item" onClick={handleJoinclass}>
                    Join class
                  </button>
                  <button className="dropdown-item" onClick={handleCreateclass}>
                    Create class
                  </button>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
              <CgProfile />
              </Link>
            </li>
            <li className="nav-item">
            {isAuthenticated && <Link to="/" onClick={handleLogout}> <BsThreeDotsVertical /></Link>}
            </li>
          </ul>
        </div>
      </div>

      {/* Modal for Create Class */}
      <Modal show={showModal} onHide={handleCreateClassClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Createclass />
        </Modal.Body>
        
      </Modal>

      {/* Modal for Join Class */}
      <Modal show={joinModal} onHide={handleJoinClassClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Join Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JoinClass />
        </Modal.Body>
       
      </Modal>
    </nav>
  );
};

export default Navbar;
