import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UserService.login(email, password);
      console.log(userData.data.ourUsers.email);
      console.log(userData.data.token);
      if (userData.data.token) {
        localStorage.setItem("token", userData.data.token);

        sessionStorage.setItem("nam", userData.data.ourUsers.email);
        sessionStorage.setItem("uname", userData.data.ourUsers.name);

        navigate("/profile");
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>{" "}
        {/* Registration link */}
      </div>
    </div>
  );
}

export default LoginPage;
