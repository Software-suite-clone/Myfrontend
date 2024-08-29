import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../login/Login.css";
import Header from "../Navbar/Header";

const Login = () => {
  return (
    <>
      <Header/>
    <div className="login-container">
      <div className="login-content">
        <SocialLogin />
        <div className="separator">
          <span className="or-text">OR</span>
        </div>
        <LoginForm />
      </div>
      <div className="register-forgot">
        <Link to="/signup">Register now</Link> | <Link to="/forgotten">Forgotten?</Link>
      </div>
    </div>
    </>
  );
};

const SocialLogin = () => (
 
  <div className="social-login">
   
    <a className="btn social-btn google" href={"http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect"}>
      <img src={require("../img/google-logo.png")} alt="Google" />Login with  Google
    </a>
    <a className="btn social-btn twitter" href="##">
      <img src={require("../img/github-logo.png")} alt="Github" /> Login with Github 
    </a>
    <a className="btn social-btn facebook" href="###">
      <img src={require("../img/fb-logo.png")} alt="Facebook" />Login with  Facebook 
    </a>
  </div>

);

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User authenticated:", data);
        navigate("/home");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-title">Sign in with</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username or email"
            value={formData.username}
            onChange={handleInputChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" className="login-button">
          LOGIN
        </Button>
      </Form>
    </div>
  );
};

export default Login;
