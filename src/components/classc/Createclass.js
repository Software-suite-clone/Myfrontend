// import React, { useState,useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import "./Createclass.css";

// function Createclass() {
//   const [classdata, setClassData] = useState({
//     id: "",
//     loginuser: "",
//     classname: "",
//     section: "",
//     roomno: "",
//     subject: "",
    
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setClassData({
//       ...classdata,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/cclass/cc/createclass", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(classdata),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Class created successfully", data);
//         // navigate("/profile"); // Navigate to home after successful creation
//         window.location.reload();
//       } else {
//         console.log("Creating class failed");
//       }

//     } catch (error) {
//       console.log("Error creating class:", error);
//     }

//     const data = new FormData();
//     for (let key in classdata) {
//       data.append(key, classdata[key]);
//     }
//   };

//    const [user, setUser] = useState([]);


//    useEffect(() => {
//     console.log("Dashboard opened");
    
//     const fetchUser = () => {
//       try {
//         const userData = sessionStorage.getItem('nam');
//         if (userData) {
//           setUser([userData]); // Set the user state as an array containing the email
//           console.log(userData);
//           console.log(user);
//         } else {
//           console.log("No user data found in sessionStorage");
//         }
//       } catch (error) {
//         console.log("Error fetching user data:", error);
//       }
//     };
  
//     fetchUser();
//   }, []);
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
// {/* for login user */}

// {user.length > 0 && (
//     <div className='logindetail'>
//       <input
//         type="text"
//         name="loginuser"
//         onChange={handleChange}
//         value={user[0]} // Access the single email string
//         readOnly
//       />
//     </div>
//   )}
//         <label>Class Name:</label>
//         <input type="text" name="classname" onChange={handleChange} value={classdata.classname} />
//         <br />
//         <label>Section:</label>
//         <input type="text" name="section" onChange={handleChange} value={classdata.section} />
//         <br />
//         <label>Subject:</label>
//         <input type="text" name="subject" onChange={handleChange} value={classdata.subject} />
//         <br />
//         <label>Room:</label>
//         <input type="text" name="roomno" onChange={handleChange} value={classdata.roomno} />
//         <br />
//         <button type="button" onClick={() => navigate("/home")}>
//           Cancel
//         </button>
//         <button type="submit">Create Class</button>
//       </form>
//     </div>
//   );
// }

// export default Createclass;

import React, { useState, useEffect } from 'react';
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
      const response = await fetch("http://localhost:8080/cclass/cc/createclass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(classdata),
      });

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
    console.log("Dashboard opened");

    const fetchUser = () => {
      try {
        const userData = sessionStorage.getItem('nam');
        if (userData) {
      
          setClassData((prevData) => ({
            ...prevData,
            loginuser: userData, // Update the loginuser field in classdata
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
        <div className='logindetail'>
          <input
            type="text"
            name="loginuser"
            onChange={handleChange}
            value={classdata.loginuser} // Set the value directly from the classdata
            readOnly
          />
        </div>
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

