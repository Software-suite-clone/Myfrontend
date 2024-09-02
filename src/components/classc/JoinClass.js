import React, { useEffect, useState } from "react";
import "./JoinClass.css";

const JoinClass = () => {
  const [classdata, setClassData] = useState({
    id: "",
    classCode: "",
    email: "",
    classname: "",
    subject: "",
    section: "",
    roomno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/jclass/joinclass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(classdata),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("class joined  created successfully", data);
        window.location.reload();
        // navigate("/profile"); // Navigate to profile after successful creation
      } else {
        console.log("Joining class failed");
      }
    } catch (error) {
      console.log("Error Joining class:", error);
    }
  };

  useEffect(() => {
    const fetchUser = () => {
      try {
        const userData = sessionStorage.getItem("nam");
        if (userData) {
          setClassData((prevData) => ({
            ...prevData,
            email: userData, // Update the loginuser field in classdata
          }));
          console.log(userData);
        } else {
          console.log("No user data found in sessionStorage");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  // const [classCode, setClassCode] = useState("");
  // const [user, setUser] = useState({});

  // const handleInputChange = (event) => {
  //   setClassCode(event.target.value);
  // };

  // const handleJoinClick = () => {
  //   // Handle the join class logic here
  //   console.log("Class Code entered:", classCode);
  // };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/admin/get-all-users", {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setUser(data.ourUsersList[0]); // Assuming you want to use the first user in the list
  //     } catch (error) {
  //       console.log("Error fetching user:", error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <div className="join-class-container">
      <div className="user-info">
        <img
          src={require("../img/profile.jpeg")} // Replace with the user's actual profile picture URL
          alt="User"
          className="profile-pic"
        />

        <div className="user-details">
          <p>You're currently signed in as</p>

          <p className="user-email">{classdata.email}</p>
        </div>

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
          name="classCode"
          className="class-code-input"
          placeholder="Class code"
          value={classdata.classCode}
          onChange={handleChange}
        />
      </div>

      <div className="instructions">
        <p>To sign in with a class code</p>
        <ul>
          <li>Use an authorized account</li>
          <li>
            Use a class code with 5-7 letters or numbers, and no spaces or
            symbols
          </li>
        </ul>
        <p>
          If you have trouble joining the class, go to the{" "}
          <a
            href="https://support.google.com/edu/classroom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Center article
          </a>
          .
        </p>
      </div>

      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button
          className="join-btn"
          onClick={handleSubmit}
          disabled={!classdata.classCode}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinClass;
