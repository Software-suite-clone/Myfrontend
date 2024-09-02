import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
import "./RegistrationPage.css";

function RegistrationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    photo: null,
    city: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("not submit"); // Clear previous errors
  
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'photo' && formData[key]) {
        data.append('photo', formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });
  
    try {
      await UserService.register(data);
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "user",
        photo: null,
        city: "",
      });
      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response) {
        if (error.response.status === 403) {
          setError("You are not authorized to perform this action.");
        } else if (error.response.status === 409) {
          setError("Email is already registered. Please use a different email.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } else {
        setError("Failed to connect to the server. Please try again later.");
      }
    }
  };
  

  return (
    <div className="auth-container">
      <h2>Registration</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      <div>
        <p>
          Registered user login here <Link to="/">Login here</Link>
        </p>
      </div>
      </form>
    </div>
  );
}


export default RegistrationPage;


