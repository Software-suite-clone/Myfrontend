import React, { useEffect, useState } from "react";
import "./JoinClass.css";

const JoinClass = () => {
  const [classCode, setClassCode] = useState("");

  const handleInputChange = (event) => {
    setClassCode(event.target.value);
  };

  const handleJoinClick = () => {
    // Handle the join class logic here
    console.log("Class Code entered:", classCode);
  };



  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("Dashboard opened");
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/getuser");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);


  return (
    <div className="join-class-container">
    
      <div className="user-info">
        <img
          src={require("../img/profile.jpeg")} // Replace with the user's actual profile picture URL
          alt="User"
          className="profile-pic"
        />

  {user.map((u) => (        
    <div className="user-details">
      <p>You're currently signed in as</p>
          <p className="user-name">{u.username}</p>
          <p className="user-email">Gmail</p>
        </div>

      ))}     
     <button className="switch-account-btn">Switch account</button>
      </div>


      <div className="class-code-section">
        <label htmlFor="class-code" className="class-code-label">
          Class code
        </label>
        <p className="class-code-instruction">
          Ask your teacher for the class code, then enter it here.
        </p>
        <input
          type="text"
          id="class-code"
          className="class-code-input"
          placeholder="Class code"
          value={classCode}
          onChange={handleInputChange}
        />
      </div>

      <div className="instructions">
        <p>To sign in with a class code</p>
        <ul>
          <li>Use an authorized account</li>
          <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
        </ul>
        <p>
          If you have trouble joining the class, go to the{" "}
          <a href="https://support.google.com/edu/classroom/" target="_blank" rel="noopener noreferrer">
            Help Center article
          </a>
          .
        </p>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="join-btn" onClick={handleJoinClick} disabled={!classCode}>
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinClass;
