import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClassPage.css";
import { FaPen } from "react-icons/fa";

 function Classinside() {
  const [allclass,setAllclass]=useState([]);

useEffect(()=>{
  console.log("merge create class and join class and fetch data");
  const fetchAllClass=async () => {
    try {
      const all = sessionStorage.getItem("nam");
      console.log(all);
      
      const response=await fetch(`http://localhost:8080/jclass/getjoinclass/${all}`);
      const data=await response.json();
      console.log("AllClass Data:", data);
        setAllclass(data);
    } catch (error) {
      console.log("error fetching class:", error);
    }
    
  };
  fetchAllClass();
},[]);

  return (


<>
      {allclass.map((a,index)=>(
    <div className="insidepage"
    key={index}>
      {/* Class Header */}

      
      <div className="class-header">
        <div className="header-content">
          <h1 className="class-title">{a.className}</h1>
          <p className="class-section">{a.section}</p>
        </div>
        <button className="customize-btn"><FaPen /></button>
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
            <span>{a.classCode}</span>
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
            <Link to="xyz" className="announcement-input-field">
              Announce something to your class
            </Link>
          </div>
        </div>
        <div className="previous-announcements">
          <div className="announcement">
            <p></p>
          </div>
        </div>
      </div>
    </div>
    ))};
  </>
  );
}

export default Classinside;