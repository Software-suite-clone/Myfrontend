import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createclass.css";

function Createclass() {
  const [classdata, setClassData] = useState({
    id: "",
    loginuser: "",
    name:"",
    classname: "",
    section: "",
    roomno: "",
    subject: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setClassData({
      ...classdata,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/cclass/cc/createclass",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(classdata),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Class created successfully", data);
        window.location.reload();
        // navigate("/profile"); // Navigate to profile after successful creation
      } else {
        console.log("Creating class failed");
      }
    } catch (error) {
      console.log("Error creating class:", error);
    }
  };

  useEffect(() => {
    

    const fetchUser = () => {
      try {
        const userData = sessionStorage.getItem("nam");
        const userData1 = sessionStorage.getItem("uname");
        if (userData && userData1) {
          setClassData((prevData) => ({
            ...prevData,
            loginuser: userData, // Update the loginuser field in classdata
            name:userData1,
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="logindetail">
          <input
            type="text"
            name="loginuser"
            onChange={handleChange}
            value={classdata.loginuser} // Set the value directly from the classdata
            readOnly
          />
        </div>
        <label>Class Name:</label>
        <input
          type="text"
          name="classname"
          onChange={handleChange}
          value={classdata.classname}
        />
        <br />
        <label>Section:</label>
        <input
          type="text"
          name="section"
          onChange={handleChange}
          value={classdata.section}
        />
        <br />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          value={classdata.subject}
        />
        <br />
        <label>Room:</label>
        <input
          type="text"
          name="roomno"
          onChange={handleChange}
          value={classdata.roomno}
        />
        <br />
        <button type="button" onClick={() => navigate("/home")}>
          Cancel
        </button>
        <button type="submit">Create Class</button>
      </form>
    </div>
  );
}

export default Createclass;
