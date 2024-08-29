import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Createclass.css";

function Createclass() {
  const [classdata, setClassData] = useState({
    id: "",
    loginuser: "",
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
      const response = await fetch("http://localhost:8080/cclass/createclass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(classdata),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Class created successfully", data);
        navigate("/home"); // Navigate to home after successful creation
      } else {
        console.log("Creating class failed");
      }

    } catch (error) {
      console.log("Error creating class:", error);
    }

    const data = new FormData();
    for (let key in classdata) {
      data.append(key, classdata[key]);
    }
  };

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   console.log("Dashboard opened");
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/getuser");
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.log("Error fetching user:", error);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
{/* for login user */}

      {/* {user.map((u) => (
          <div className='logindetail' key={u.username}>
            <input type="text" name="loginuser" onChange={handleChange} value={u.username} readOnly/>
          </div>
        ))} */}
        <label>Class Name:</label>
        <input type="text" name="classname" onChange={handleChange} value={classdata.classname} />
        <br />
        <label>Section:</label>
        <input type="text" name="section" onChange={handleChange} value={classdata.section} />
        <br />
        <label>Subject:</label>
        <input type="text" name="subject" onChange={handleChange} value={classdata.subject} />
        <br />
        <label>Room:</label>
        <input type="text" name="roomno" onChange={handleChange} value={classdata.roomno} />
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
