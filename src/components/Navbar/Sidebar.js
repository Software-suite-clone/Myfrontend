import React from "react";
import { CiViewTable } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <Link to="/home">  Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaHome /> 
        </li>
        <li className="list-group-item">
          <Link to="/classes">Classes</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TiBusinessCard />
        </li>
        <li className="list-group-item">
          <Link to="/assignments">Assignments</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MdAssignment />
        </li>
        <li className="list-group-item">
          <Link to="/grades">Grades</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CiViewTable />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
